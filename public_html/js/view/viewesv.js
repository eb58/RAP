/* global _,jQuery, fabric, utils, geom, esvMasks, CONSTS, fragmentTypesForEsvTypes *//*jshint multistr: true */
(function ($) {
  "use strict";
  $.fn.viewesv = function (mdl, opts) {

    var id = this[0].id;
    var self = this;
    this.id = id;
    var defopts = {
      width: CONSTS.IMGWIDTH,
      height: CONSTS.IMGHEIGHT,
      border: '1px solid lightgrey'
    };
    var myopts = $.extend({}, defopts, opts || {});
    //var statusdata = {      esvtype: '',    };
    var paramProps = {
      fill: CONSTS.COLOR.PARAM.BACKGROUND,
      cornerColor: CONSTS.COLOR.PARAM.CORNER,
      borderColor: CONSTS.COLOR.PARAM.BORDER,
      cornerSize: CONSTS.CORNERSIZE.PARAM,
      hasRotatingPoint: false
    };
    this.html('\
        <div>\n\
          <div id="headeresv" style="height:26px; margin:10px 2px 10px 2px;">\n\
            <div id="esvTitle"      class="simplelabel"></div>\n\
            <div id="esvPagination" style="float:right;"></div>\n\
          </div>\n\
          <div id="contentesv" style="margin:2px;">\
            <div id="canvases" style="width:100%; overflow:auto;"></div>\n\
          </div>\n\
        </div>\n');

    function getIdsOfSelectedFragments() {
      return $.makeArray($('#viewesv #canvases .fragmentselected')).map(function (a) {
        return Number($(a).prop('id'));
      }) || [];
    }

    function resetFragmentState(frag) {
      if (frag && frag.state === CONSTS.FRAGMENTSTATES.FREIGEGEBEN) {
        frag.state = CONSTS.FRAGMENTSTATES.INBEARBEITUNG;
        $.publish('viewflds:update:param');
      }
    }

    function createPopupMenu() {

      function createMenuItemsFragmentTypes(frag) {
        var actRecord = mdl.getActRecord();
        if (mdl.isLeadingFragmentOfRecord(actRecord, frag)) {
          return {notpossible: {name: frag.esvtype, icon: 'fa-check-square-o', disabled: true}};
        }

        var types = fragmentTypesForEsvTypes[actRecord.esvtype];
        var menuItemsFragmentTypes = types.reduce(function (acc, o) {
          acc['changeFragmentType:' + o] = {
            name: o,
            icon: actRecord.esvtype === o ? 'fa-check-square-o' : 'fa-square-o',
            disabled: !esvMasks[o] || actRecord.esvtype === o
          };
          return acc;
        }, {});
        return menuItemsFragmentTypes;
      }

      function createMenuItems(param, frag) { // create menu item depending on actual object is selected
        var disable = {
          groupFragments: function () {
            return $('#canvases .fragmentselected').length < 2;
          },
          resetParams: function () {
            return false;
          },
          removeFromESV: function () {
            return $('#canvases .fragmentselected').length === 0;
          },
          moreThanOneFragmentSelected: function () {
            return $('#canvases .fragmentselected').length > 1;
          }
        };

        return param ? {
          toggleHasRedMark: {name: 'Ist ger\u00f6tet', icon: param.hasRedMark ? 'fa-check-square-o' : 'fa-square-o'},
          deleteParam: {name: 'Parameter l\u00f6schen', icon: 'fa-trash'},
//          info: {name: param.id, },
//          now: {name: _.now(), },
        } : {
          groupFragments: {name: 'Fragmentgruppe bilden', disabled: disable.groupFragments},
          resetParams: {name: 'Parameter zur\u00fccksetzen', disabled: disable.resetParams},
          changeFragmentType: {name: 'Fragmenttyp zuordnen', disabled: disable.moreThanOneFragmentSelected, items: createMenuItemsFragmentTypes(frag), },
          separator: '',
          removeFromESV: {name: 'Aus ESV entfernen', disabled: disable.removeFromESV, icon: "fa-trash"},
        };
      }
      $.contextMenu('destroy', '.area');
      $.contextMenu({
        selector: '.area',
        build: function (trigger, evt) {
          var areaid = $('canvas:first-child()', trigger).prop('id')
          var fragid = Number(trigger.parent().prop('id'));
          var area = mdl.findAreaById(areaid);
          var frag = mdl.findFragmentById(fragid);
          var ao = area.fc.getActiveObject();
          var param = ao ? mdl.findParameterById(ao.paramid) : null;
          return {
            items: createMenuItems(param, frag),
            callback: function (key, options) {
              utils.log('clicked: ' + key + ' on --- Options:', options, 'Trigger:', trigger, 'Event:', evt);
              if (key === 'groupFragments') {
                mdl.joinFragments(getIdsOfSelectedFragments());
                renderEsv(mdl.statusdata.actRecordIndex);
                $.publish('viewesv:released'); //refresh pdf view
              }

              if (key === 'resetParams') {
                $.publish('viewesv:resetparams');
              }

              if (key === 'removeFromESV') {
                var actRecord = mdl.getActRecord();
                var fragids = getIdsOfSelectedFragments();
                var oneIsLeadingFrag = fragids.reduce(function (acc, fragid) {
                  return acc || mdl.isLeadingFragmentOfRecord(actRecord, mdl.findFragmentById(fragid));
                }, false);
                if (oneIsLeadingFrag) {
                  if (!confirm('Sie haben ein f\u00fchrendes Fragment ausgewählt. ESV l\u00f6schen?'))
                    return;
                  fragids = _.pluck(actRecord.fragmentLinks, 'fragmentId'); // take them all
                }
                fragids.forEach(function (fragid) {
                  mdl.delParametersFromFragmentById(fragid);
                  mdl.delFragmentLinkById(fragid);
                  resetFragmentState(mdl.findFragmentById(fragid));
                })
                initViewesv();
                $.publish('viewesv:delfragment');
                $.publish('viewesv:changed');
              }

              if (key === 'toggleHasRedMark') {
                param.hasRedMark = !param.hasRedMark;
                resetFragmentState(mdl.findFragmentById(fragid));
                var sameAssocParams = mdl.findParametersInFragmentByAssocFldId(fragid, param.assocfldid);
                sameAssocParams.forEach(function (sameAssocParam) {
                  sameAssocParam.hasRedMark = param.hasRedMark;
                });
              }
              if (key === 'deleteParam') {
                mdl.delParameterById(param.id);
                renderEsv(mdl.statusdata.actRecordIndex);
                resetFragmentState(mdl.findFragmentById(fragid));
                $.publish('viewesv:changed');
              }
              if (key.indexOf('changeFragmentType:') === 0) {
                var fragmentType = key.split(':')[1];
                console.log('Fragmenttype changed!!!!!!!!!', fragmentType);
              }
            },
          };
        }
      });
      $.contextMenu('destroy', '#canvases');
      $.contextMenu({
        selector: '#canvases',
        build: function (trigger, evt) {
          return {
            items: {
              releaseFragments: {
                name: 'Fragmente freigeben',
                callback: function () {
                  console.log('releaseFragments')
                  mdl.releaseFragments(mdl.getActRecord());
                  $.publish('viewesv:released');
                }},
            },
          }
        }
      });
    }

    function renderFragArea(frag, area) {

      function drawArea(area) {
        mdl.getPageAsBase64(area.pageNumber, function (img) {
          var image = new Image();
          image.src = img.data;
          image.onload = function () {
            var tl = area.positions[0];
            var sz = geom.sizeOfAreaCoord(area);
            var img = new Image();
            img.src = new fabric.Image(image, {stroke: CONSTS.COLOR.FRAGMENT.STROKE}).toDataURL({format: 'png', left: tl.x, top: tl.y, width: sz.w, height: sz.h});
            img.onload = function () {
              area.fc.setBackgroundImage(img.src, area.fc.renderAll.bind(area.fc));
            };
          };
        })
      }

      function renderParam(area, param) {
        var p = param.coordinates.positions;

        //  param in area?
        if (!geom.rectInRect(p, area.positions)) {
          utils.log('RECT not IN RECT  ', JSON.stringify(pa, ['x', 'y']), JSON.stringify(area.positions, ['x', 'y']));
          return;
        }

        //  compute position of param relative to area
        var tlp = geom.pointSub(p[0], area.positions[0]);
        var brp = geom.pointSub(p[1], area.positions[0]);
        var pa = [tlp, brp];
        var sz = geom.rectSizeOf(pa);
        var stroke = param.assocfldid ? CONSTS.COLOR.PARAM.STROKEHIGHLIGHTED : CONSTS.COLOR.PARAM.STROKE;
        var rect = new fabric.Rect(_.extend({top: pa[0].y, left: pa[0].x, width: sz.w, height: sz.h, stroke: stroke}, paramProps));
        rect.paramid = param.id;
        // link rect to param and vice versa
        rect.assocParam = param;
        param.rect = rect;
        area.fc.add(rect);
        area.fc.on('mouse:over', function (e) {
          if (e.target && e.target.assocParam && e.target.assocParam.assocfldid) {
            e.target.setFill(CONSTS.COLOR.PARAM.HIGHLIGHTED);
            area.fc.renderAll();
            $.publish('viewesv:highlight', frag.id + ' #' + e.target.assocParam.assocfldid)
          }
        })

        area.fc.on('mouse:out', function (e) {
          if (e.target && e.target.assocParam && e.target.assocParam.assocfldid) {
            e.target.setFill(CONSTS.COLOR.PARAM.BACKGROUND);
            area.fc.renderAll();
            $.publish('viewesv:unhighlight', frag.id + ' #' + e.target.assocParam.assocfldid)
          }
        })

        return rect;
      }

      area.fc = new fabric.Canvas(area.id, {selection: true, });
      drawArea(area);
      frag.parameters.forEach(function (param) {
        renderParam(area, param);
      })

      { // Mouse Handling
        var startPos = null;
        var startSize = null;

        area.fc.on('selection:created', function (event) {
          area.fc.deactivateAll();
        });

        area.fc.on('mouse:down', function (event) {
          if (event.e.ctrlKey && !area.fc.getActiveObject()) {
            startPos = area.fc.getPointer(event.e);
          }
          if (event.target) {
            startSize = event.target.getBoundingRect();
          }

        })

        area.fc.on('mouse:up', function (event) {
          var endPos = area.fc.getPointer(event.e);
          if (!startPos || geom.pointEqual(startPos, endPos))
            return;

          endPos.x = Math.max(0, Math.min(area.fc.width, endPos.x));
          endPos.y = Math.max(0, Math.min(area.fc.height, endPos.y));

          var r = geom.rectCreate(startPos, endPos);
          var rect = renderParam(area, mdl.addParameter(frag, area, mdl.createParameter(area.pageNumber, r[0], r[1])));
          if (rect) {
            area.fc.renderAll();
            area.fc.setActiveObject(rect);
            resetFragmentState(frag);
            self.newParam = true;
          }
          startPos = null;
        });
        area.fc.on('object:modified', function (options) {
          var ao = options.target.canvas.getActiveObject();
          console.log('object:modified', options, ao);
          var param = mdl.findParameterById(ao.paramid);
          if (param) {
            var area = mdl.findAreaById(param.areaid);
            var tlArea = area.positions[0];
            var ntl = geom.pointAdd(tlArea, ao.aCoords.tl);
            var nbr = geom.pointAdd(tlArea, ao.aCoords.br);
            mdl.setParameterPosition(param, ntl, nbr);
            resetFragmentState(mdl.findFragmentWithIncludingParamByParamId(param.id));
            utils.resetStrokeWidth(ao);
          }
        });
        area.fc.on('object:selected', function (options) {
          console.log('object:selected', options);
          deselectAllParams(area.fc);
        });
        area.fc.on('object:scaling', function (e) {
          utils.restrictToCanvasWhenScaling(e.target, startSize);
        });
        area.fc.on('object:moving', function (e) {
          utils.restrictToCanvasWhenMoving(e.target);
        });

      }
    }

    function renderFrag(frag) {
      var htmlAreas = frag.coordinates.reduce(function (acc, area) {
        var sz = geom.sizeOfAreaCoord(area);
        var htmlArea = _.template('\
          <div class="area">\n\
            <canvas id="<%=id%>"  width=<%=w%> height=<%=h%>></canvas>\n\
          </div>\n')({id: area.id, w: sz.w, h: sz.h,
        });
        return acc + htmlArea;
      }, '');
      $('#canvases').append(_.template('\
        <div id="<%=fragid%>" class="fragment">\n\
          <%=areas%>\n\
        </div>\n')({fragid: frag.id, areas: htmlAreas}));
      frag.coordinates.forEach(function (area) {
        renderFragArea(frag, area);
      });
      frag.deselectAllParams = function (fc) {
        console.log('deselectAllParams');
        this.coordinates.forEach(function (area) {
          if (fc !== area.fc) {
            area.fc.deactivateAllWithDispatch().renderAll();
          }
        });
      }
    }

    function renderEsv(num) {
      $('#canvases').html('');
      if (!mdl.getRecord(num))
        return;
      mdl.findFragmentsForRecord(mdl.getRecord(num)).forEach(function (frag) {
        renderFrag(frag);
      })
      $('.fragment').off().on('click', function (evt) {
        if (evt.ctrlKey) { // select multiple fragments
          if (!self.newParam)
            $(this).addClass('fragmentselected');
          delete self.newParam;
          $.publish('viewesv:changed:actfragment', getIdsOfSelectedFragments().length > 1 ? 0 : Number($('.fragmentselected').prop('id')));
        } else {
          var oldfragid = Number($('.fragmentselected').prop('id'));
          $('.fragment').removeClass('fragmentselected');
          $(this).addClass('fragmentselected');
          var fragid = Number($('.fragmentselected').prop('id'));
          if (fragid !== oldfragid) {
            $.publish('viewesv:changed:actfragment', fragid);
          }
        }
      })
    }

    function deselectAllParams(fc) {
      var actRecord = mdl.getRecord(mdl.statusdata.actRecordIndex);
      mdl.findFragmentsForRecord(actRecord).forEach(function (frag) {
        frag.deselectAllParams(fc);
      })
    }

    function initPagination(pageNum) {
      if (mdl.getRecords().length === 0) {
        $('#esvPagination').hide();
      } else {
        $('#esvPagination').show();
        $('#esvPagination').pagination({
          nextText: '>',
          prevText: '<',
          items: mdl.getRecords().length,
          itemsOnPage: 1,
          cssStyle: 'compact-theme',
          currentPage: pageNum + 1 || 1,
          selectOnClick: false,
          onPageClick: function (n) {// pagination tool uses 1,2,3 
            console.log('Aktuelle ESV:', n - 1);
            if (mdl.findParametersNotAssociated(mdl.getActRecord()).length) {
              if (confirm('\
                Es wurden nicht alle Parameterfundstellen einem Eintragungsparameter zugeordnet. \n\n\
                Diese Fundstellen k\u00f6nnen nicht gespeichert werden. \n\
                Wollen Sie trotzdem fortsetzen?\n\
              ')) {
                mdl.delParametersNotAssociated(mdl.getActRecord());
              } else {
                return false;
              }
            }
            mdl.statusdata.actRecordIndex = n - 1;
            //statusdata.esvtype = mdl.getRecord(mdl.statusdata.actRecordIndex).esvtype;
            //ddEsvType.setSelectedValue(statusdata.esvtype);
            initEsvTitle();
            renderEsv(mdl.statusdata.actRecordIndex);
            $.publish('viewesv:changed:pagination');
            $.publish('viewesv:changed');
            $('#esvPagination').pagination('redraw');
          }
        });
      }
    }

    { // Subscriptions
      $.subscribe('viewpdf:update', function (evt, esvType) {
        console.log(' ---------- viewpdf:update ----------------');
        //statusdata.esvtype = esvType;
        //ddEsvType.setSelectedValue(statusdata.esvtype);
        initEsvTitle();
        initPagination(mdl.statusdata.actRecordIndex);
        renderEsv(mdl.statusdata.actRecordIndex);
        $.publish('viewesv:changed');
      });
      $.subscribe('viewflds:highlight:param', function (evt, msg) {
        var arr = msg.split(':');
        var fragid = Number(arr[0]);
        var assocfldid = arr[1];
        var params = mdl.findFragmentById(fragid).parameters;
        params.forEach(function (param) {
          if (param.rect) {
            param.rect.setFill(param.assocfldid === assocfldid ? CONSTS.COLOR.PARAM.HIGHLIGHTED : CONSTS.COLOR.PARAM.BACKGROUND);
            param.rect.setStroke(param.assocfldid ? CONSTS.COLOR.PARAM.STROKEHIGHLIGHTED : CONSTS.COLOR.PARAM.STROKE);
            param.rect.canvas.renderAll();
          }
        })
      });
      $.subscribe('viewflds:unhighlight:param', function (evt, msg) {
        var arr = msg.split(':');
        var fragid = Number(arr[0]);
        var params = mdl.findFragmentById(fragid).parameters;
        params.forEach(function (param) {
          if (param.rect) {
            param.rect.setFill(CONSTS.COLOR.PARAM.BACKGROUND);
            param.rect.setStroke(param.assocfldid ? CONSTS.COLOR.PARAM.STROKEHIGHLIGHTED : CONSTS.COLOR.PARAM.STROKE);
            param.rect.canvas.renderAll();
          }
        })
      });
    }

    function initEsvTitle() {
      var esvtype = mdl.getActRecord() ? mdl.getActRecord().esvtype : '';
      $('#esvTitle').text(esvtype ? 'ESV-Vorlage ' + esvtype : '');
    }

    // Init
    function initViewesv() {
      initEsvTitle();
      initPagination(mdl.statusdata.actRecordIndex);
      renderEsv(mdl.statusdata.actRecordIndex);
    }

    createPopupMenu();
    initViewesv();

    // more exported functions
    _.extend(this, {
      getSelectedParam: function getSelectedParam() {
        var selParam;
        var actRecord = mdl.getRecord(mdl.statusdata.actRecordIndex);
        mdl.findFragmentsForRecord(actRecord).forEach(function (frag) {
          frag.coordinates.forEach(function (area) {
            if (area.fc.getActiveObject()) {
              var ao = area.fc.getActiveObject();
              selParam = ao.assocParam;
            }
          })
        });
        return selParam;
      }
    });
    return this;
  };
}
)(jQuery);