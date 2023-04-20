/* global _,jQuery, fabric, menuBearbeitungssausschluss, menusBlattbereichAuswahl, utils, valuesBlattbereichAuswahl, geom, CONSTS, viewesv, pdfpagemgr, valuesBearbeitungssausschluss, menuItemsBearbeitungssausschluss, menuItemsBlattbereichAuswahl, blattbereich2esvTypes */
/*jshint multistr: true */
(function ($) {
  'use strict';
  $.fn.viewpdf = function (mdl, opts) {
    var id = this[0].id;
    this.id = id;

    var defopts = {
      width: CONSTS.IMGWIDTH,
      height: CONSTS.IMGHEIGHT,
      border: '1px solid lightgrey'
    };
    var myopts = $.extend({}, defopts, opts || {});
    var aspectRatio = (CONSTS.IMGWIDTH / CONSTS.IMGHEIGHT);
    myopts.height = myopts.height || myopts.width / aspectRatio;

    var fragProps = {
      fill: CONSTS.COLOR.FRAGMENT.BACKGROUND,
      stroke: CONSTS.COLOR.FRAGMENT.STROKE,
      cornerSize: CONSTS.CORNERSIZE.AREA,
      cornerColor: CONSTS.COLOR.FRAGMENT.CORNER,
      borderColor: CONSTS.COLOR.FRAGMENT.BORDER,
      hasRotatingPoint: false
    };

    var ddBlattbereichsAuswahl;

    var initPagination = function (n) {
      $('#paginationPdf').pagination({
        currentPage: n,
        nextText: '>',
        prevText: '<',
        items: mdl.getPages().length,
        itemsOnPage: 1,
        cssStyle: 'compact-theme',
        onPageClick: function (n) {
          renderPage(n - 1); // pagination tool uses 1,2,3 
          console.log('Aktuelle Seite:', mdl.statusdata.actPageIndex);
        }
      });
    };

    var initDropDownBlattbereichsauswahl = function () {
      var existingValues = _.pluck(mdl.getPages(), 'extType');
      var allowedValues = [''].concat(valuesBlattbereichAuswahl.filter(function (val) {
        return _.indexOf(existingValues, val) >= 0;
      }));
      ddBlattbereichsAuswahl = $('#blattbereichsauswahl').ebdropdown({
        jqueryui: false,
        width: '150px',
        change: function () {
          console.log('Blattbereich ge\u00e4ndert', $(this).val());
          var p = mdl.getFirstPageWithPageType($(this).val());
          if (p) {
            renderPage(p.number);
            initPagination(p.number + 1);
          }
        }
      }, allowedValues);
    };

    (function (a) {
      var s = _.template('\n\
        <div>\n\
          <div id="headerpdf" style="height:26px; margin:10px 2px 10px 2px">\n\
            <div id="pdfTitle"             class="simplelabel">Blattbereich</div>\n\
            <div id="blattbereichsauswahl" style="float:left"></div>\n\
            <div id="paginationPdf"        style="float:right" ></div>\n\
          </div>\n\
          <div id="contentpdf" style="margin:2px; overflow: auto;">\
            <canvas\
                  id="canvasPdf"\
                  style="border:<%=border%>;"\
                  width=<%=w%>px\
                  height=<%=h%>px\
            </canvas>\
          </div>\n\
        </div>\n')({border: myopts.border, w: myopts.width + 10, h: myopts.height + 10});
      a.html(s);
      initDropDownBlattbereichsauswahl();
    })(this);

    var fabcanvas = new fabric.Canvas('canvasPdf');
    fabcanvas.setWidth(myopts.width);
    fabcanvas.setHeight(myopts.height);

    function createPopupMenu() {
      var createMenuItemsBearbeitungssausschluss = function (ao) {
        if (!ao)
          return [];

        var frag = mdl.getFragmentById(ao.fragid);
        if (!frag)
          return [];

        var val = frag.reasonBearbeitungsausschluss;

        return valuesBearbeitungssausschluss.reduce(function (acc, o) {
          return acc['Bearbeitungsausschluss:' + o] = {name: o ? o : '<leer>', icon: val === o ? 'fa-check-square-o' : 'fa-square-o'}, acc;
        }, {})
      };
      var createMenuItemsBlattbereichauswahl = function () {
        var blattbereich = mdl.getPageType(mdl.getPage(mdl.statusdata.actPageIndex));
        return valuesBlattbereichAuswahl.reduce(function (acc, o) {
          return acc['Blattbereichauswahl:' + o] = {name: o ? o : '<leer>', icon: o === blattbereich ? 'fa-check-square-o' : 'fa-square-o'}, acc;
        }, {})
      };
      function createMenuItems(ao) { // create menu item depending on actual object is selected
        var extType = mdl.getPage(mdl.statusdata.actPageIndex).extType;
        utils.log('createMenuItems --- extType:', extType);

        var disable = {
          add2actEsv: function () {
            if (mdl.getRecords().length === 0)
              return true;
            if (mdl.findFragmentInActRecordById(ao.fragid))
              return true;
            if (mdl.findAreaInActRecordById(ao.areaid))
              return true;
            if (!extType)
              return true;
            if (blattbereich2esvTypes[extType].length === 0)
              return true;
            var frag = mdl.findFragmentById(ao.fragid);
            if (frag && frag.reasonBearbeitungsausschluss)
              return true;
            return false;
          },
          add2newEsv: function () {
            if (!extType)
              return true;
            if (blattbereich2esvTypes[extType].length === 0)
              return true;
            var frag = mdl.findFragmentById(ao.fragid);
            if (frag && frag.reasonBearbeitungsausschluss)
              return true;
            if (mdl.isLeadingFragmentById(ao.fragid))
              return true;
            return false;
          },
          Bearbeitungsausschluss: function () {
            return mdl.findFragmentInAnyRecordById(ao.fragid);
          }
        };
        var itemsFrag = {
          add2actEsv: {name: 'Zu aktuellem ESV', disabled: disable.add2actEsv, },
          add2newEsv: {name: 'Zu neuem ESV', disabled: disable.add2newEsv,
            items: !extType ? {} : blattbereich2esvTypes[extType].reduce(function (acc, o) {
              return acc['add2newEsv:' + o] = {name: o}, acc;
            }, {})
          },
          Bearbeitungsausschluss: {name: 'Bearbeitungsausschluss', disabled: disable.Bearbeitungsausschluss, items: createMenuItemsBearbeitungssausschluss(ao), },
          seperator: '',
          deleteFragment: {name: 'L\u00f6schen', icon: "fa-trash"},
          //info: {name: _.now()}
        };
        var itemsPage = {
          relateBlattbereich: {name: 'Blattbereich zuordnen', items: createMenuItemsBlattbereichauswahl(), }
        };
        return ao ? itemsFrag : itemsPage;
      }
      $.contextMenu('destroy', '#contentpdf');
      $.contextMenu({
        selector: '#contentpdf',
        build: function (trigger, evt) {
          var ao = fabcanvas.getActiveObject();
          return {
            items: createMenuItems(ao),
            callback: function (key, options) {
              console.log('clicked: ' + key + ' on --- Options:', options, 'Trigger:', trigger, 'Event:', evt);

              if (key === 'add2actEsv') {
                mdl.addFragment2Record(mdl.getActRecord(), mdl.getFragmentById(ao.fragid));
                $.publish('viewpdf:update');
              }
              if (key.indexOf('add2newEsv:') === 0) {
                if (mdl.getRecord(mdl.statusdata.actRecordIndex)) {
                  if (mdl.findParametersNotAssociated(mdl.getRecord(mdl.statusdata.actRecordIndex)).length) {
                    if (confirm('\
                        Es wurden nicht alle Parameterfundstellen einem Eintragungsparameter zugeordnet. \n\n\
                        Diese Fundstellen k\u00f6nnen nicht gespeichert werden. \n\
                        Wollen Sie trotzdem fortsetzen?\n\
                      ')) {
                      mdl.delParametersNotAssociated(mdl.getRecord(mdl.statusdata.actRecordIndex));
                    } else {
                      return false;
                    }
                  }
                }
                var esvType = key.split(':')[1];
                var newRec = mdl.createRecord(esvType);
                mdl.addFragment2Record(mdl.addRecord(newRec), mdl.getFragmentById(ao.fragid));
                mdl.sortRecords();
                mdl.statusdata.actRecordIndex = mdl.getRecords().indexOf(newRec);
                $.publish('viewpdf:update');
              }
              if (key.indexOf('Bearbeitungsausschluss:') === 0) {
                var reasonBearbeitungsausschluss = key.split(':')[1];
                mdl.getFragmentById(ao.fragid).reasonBearbeitungsausschluss = reasonBearbeitungsausschluss;
                ao.setFill(reasonBearbeitungsausschluss ? CONSTS.COLOR.FRAGMENT.BEARBEITUNGAUSSCHLUSS : CONSTS.COLOR.FRAGMENT.BACKGROUND);
                ao.canvas.renderAll()
              }
              if (key === 'deleteFragment') {

                var isLeadingFrag = mdl.isLeadingFragmentById(ao.fragid);
                if (isLeadingFrag) {
                  if (confirm('Sie haben ein f\u00fchrendes Fragment eines ESV ausgew\u00e4hlt. \nMit dem f\u00fchrenden Fragment wird auch der ESV gel\u00f6scht. \nFortfahren?')) {
                    var record = mdl.findRecordWithLeadingFragmentById(ao.fragid);
                    var fragids = _.pluck(record.fragmentLinks, 'fragmentId'); // take them all
                    fragids.forEach(function (fragid) {
                      mdl.delParametersFromFragmentById(fragid);
                      mdl.delFragmentLinkFromRecordById(record, fragid);
                    })
                    mdl.delFragmentById(ao.fragid);
                    renderPage(mdl.statusdata.actPageIndex);
                    $.publish('viewpdf:update');
                  }
                } else {
                  if (confirm('Fragment l\u00f6schen?')) {
                    mdl.delFragmentById(ao.fragid);
                    renderPage(mdl.statusdata.actPageIndex);
                    $.publish('viewpdf:update');
                  }
                }
              }
              if (key.indexOf('Blattbereichauswahl:') === 0) {
                var blattbereich = key.split(':')[1];
                mdl.setPageType(mdl.getPage(mdl.statusdata.actPageIndex), blattbereich);
                initDropDownBlattbereichsauswahl();
                ddBlattbereichsAuswahl.setSelectedValue(blattbereich);
              }
            },

          };
        }
      });
    }

    function renderPage(num) { // 0,1,2,
      mdl.statusdata.actPageIndex = num;

      var blattbereich = mdl.getPageType(mdl.getPage(mdl.statusdata.actPageIndex));
      ddBlattbereichsAuswahl.setSelectedValue(blattbereich);

      fabcanvas.clear();
      mdl.getPageAsBase64(num, function (img, afterLoading) {
        var image = new Image();
        image.src = img.data;
        image.width = img.width;
        image.height = img.height;
        image.onload = function () {
          $('#canvasPdf').prop('width', img.width);
          $('#canvasPdf').prop('height', img.height);
          fabcanvas.setWidth(img.width);
          fabcanvas.setHeight(img.height);
          fabcanvas.setBackgroundImage(new fabric.Image(image));
          fabcanvas.renderAll();
          afterLoading && afterLoading();
        };
      });
      mdl.getFragments().forEach(function (frag) {
        frag.coordinates.forEach(function(area) {
	        if (area.pageNumber === num) {
	          var pos = area.positions;
	          var sz = geom.rectSizeOf(pos);
	          var r = geom.rectCreate(pos[0], pos[1]);
	          var fill = frag.reasonBearbeitungsausschluss ? CONSTS.COLOR.FRAGMENT.BEARBEITUNGAUSSCHLUSS
	            : (frag.state === CONSTS.FRAGMENTSTATES.FREIGEGEBEN) ? CONSTS.COLOR.FRAGMENT.FREIGEGEBEN
	            : CONSTS.COLOR.FRAGMENT.BACKGROUND;
	          var fp = _.extend({}, fragProps, {fill: fill});
	          var rect = new fabric.Rect(_.extend({top: r[0].y, left: r[0].x, width: sz.w, height: sz.h}, fp));
	          rect.areaid = area.id;
	          rect.fragid = frag.id;
	          fabcanvas.add(rect);
	        }
        });
      });
    }

    function initMouseHandling() {
      var startPos = null;
      var startSize = null;

      fabcanvas.on('selection:created', function () {
        fabcanvas.deactivateAll();
      });
      fabcanvas.on('mouse:down', function (event) {
        console.log('mouse:down startPos:', startPos);
        if (event.e.ctrlKey && !fabcanvas.getActiveObject()) {
          startPos = fabcanvas.getPointer(event.e);
        }
        if (event.target) {
          startSize = event.target.getBoundingRect();
          selectAllFromGroup(event.target.areaid);
        }
      });
      fabcanvas.on('mouse:up', function (event) {
        var endPos = fabcanvas.getPointer(event.e);
        console.log('mouse:up', endPos);

        if (!startPos || geom.pointEqual(startPos, endPos))
          return;

        endPos.x = Math.max(0, Math.min(fabcanvas.width, endPos.x));
        endPos.y = Math.max(0, Math.min(fabcanvas.height, endPos.y));

        var r = geom.rectCreate(startPos, endPos);
        var sz = geom.rectSizeOf([r[0], r[1]]);
        var rect = new fabric.Rect(_.extend({top: r[0].y, left: r[0].x, width: sz.w, height: sz.h}, fragProps));
        if (rect) {
          fabcanvas.add(rect);
          fabcanvas.setActiveObject(rect);

          var area = mdl.createArea(mdl.statusdata.actPageIndex, rect.aCoords.tl, rect.aCoords.br);
          var esvtype = mdl.getRecords(mdl.statusdata.actRecordIndex).esvtype;
          var frag = mdl.addFragment(mdl.createFragment(area), esvtype);
          rect.areaid = area.id;
          rect.fragid = frag.id;
        }
        startPos = null;
      });
      fabcanvas.on('object:modified', function (event) {
        var ao = fabcanvas.getActiveObject();
        if (ao && ao.fragid && ao.areaid) {
          console.log('object:modified', event, ao.fragid, ao.areaid);
          mdl.findFragmentById(ao.fragid).state = CONSTS.FRAGMENTSTATES.INBEARBEITUNG;
          var area = mdl.findAreaById(ao.areaid);
          if (area) {
            mdl.setAreaPosition(area, ao.aCoords.tl, ao.aCoords.br);
            utils.resetStrokeWidth(ao);
            $.publish('viewpdf:update');
          }
        }
      });
      fabcanvas.on('object:scaling', function (e) {
        utils.restrictToCanvasWhenScaling(e.target, startSize);
      });
      fabcanvas.on('object:moving', function (e) {
        utils.restrictToCanvasWhenMoving(e.target);
      });
    }

    function selectAllFromGroup(areaid) {
        var fragWithArea;
        fabcanvas.getObjects().forEach(function(obj){obj.set({fill: CONSTS.COLOR.FRAGMENT.BACKGROUND})})
        mdl.fragments.forEach(function(frag){
          frag.coordinates.forEach(function(coord){
            if(coord.id === areaid) fragWithArea = frag;
          });
        });
        var arrayOfAreasid = fragWithArea.coordinates.map(function(coord){ return coord.id});
        if(arrayOfAreasid.length > 1) {
          var arrayOfActiveObjects = fabcanvas.getObjects().filter(function (obj) {
            if (arrayOfAreasid.indexOf(obj.areaid) > -1) return obj;
          });
          arrayOfActiveObjects.forEach(function (obj) {
            obj.set({fill: CONSTS.COLOR.FRAGMENT.GROUP});
          });
        }
      }
    
    $.subscribe('viewesv:released', function () {
      console.log(' ---------- viewflds:update:param ----------------');
      renderPage(mdl.statusdata.actPageIndex)
    });
    $.subscribe('viewesv:delfragment', function () {
      console.log(' ---------- viewesv:delfragment ----------------');
      renderPage(mdl.statusdata.actPageIndex)
    });
    $.subscribe('viewflds:update:param', function () {
      console.log(' ---------- viewflds:update:param ----------------');
      renderPage(mdl.statusdata.actPageIndex)
    });
    $.subscribe('viewesv:changed:pagination', function () {
      console.log(' ---------- viewesv:changed:pagination ---------------- ');
      var actEsv = mdl.getRecord(mdl.statusdata.actRecordIndex);
      var frags = mdl.findFragmentsForRecord(actEsv);
      var leadFrag = frags[0];
      var pageNr = leadFrag.coordinates[0].pageNumber;
      mdl.statusdata.actPageIndex = pageNr;
      initPagination(mdl.statusdata.actPageIndex + 1);
      renderPage(mdl.statusdata.actPageIndex)
    });

    createPopupMenu();
    initMouseHandling();
    initPagination(mdl.statusdata.actPageIndex + 1);
    renderPage(mdl.statusdata.actPageIndex);
    this.fabcanvas = fabcanvas;
    return this;
  }
})(jQuery);
