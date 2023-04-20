/* global _,jQuery, fabric, esvMasks, utils *//*jshint multistr: true */
(function ($) {
  "use strict";
  $.fn.viewwrk = function (mdl, opts) {
    var id = this[0].id;
    this.id = id;
    var defopts = {};
    var myopts = $.extend({}, defopts, opts);
    var tree;
    var actFrag;

    this.html('\
      <div id="viewwrkinner">\n\
        <h2 id="fragtyp"></h2>\n\
        <div>\n\
          <div id="viewflds"></div>\n\
          <div id="viewtree"></div>\n\
        </div>\n\
      </div>\n');

    var treeOpts = {
      onClickItem: function (ev) {
        ev.stopPropagation();
        var id = ev.target.parentNode.id
        console.log('clicked on node with id: ', id);
        var item = tree.itemById(id);
        if (item) {
          $('#viewflds').viewflds(mdl, item.inputFields || [], actFrag.id);
          tree.setFocus(id);
        }
      },
      onDeleteItem: function (itemId) {
        console.log('deleting node with id: ', itemId);
        $('#viewflds').viewflds(mdl, []);
        var parameters = mdl.findParametersAssociated(actFrag);
        parameters.forEach(function (param) {
          if (!mdl.getValFromEsv(actFrag.esvData, param.assocfldid)) {
            delete param.assocfldid;
          }
        })
      }
    };

    function init(frag) {
      actFrag = frag;
      if (frag) {
        $('#viewwrkinner').show();
        $('#fragtyp').text('Fragmenttyp ' + frag.esvtype);
        tree = $('#viewtree').ebtree(treeOpts, frag.esvData);
        $('#viewflds').viewflds(mdl, frag.esvData[0].inputFields, frag.id);
      } else {
        $('#viewwrkinner').hide();
      }
    }

    // Subscriptions
    $.subscribe('viewesv:changed', function (evt) {
      console.log(' ---------- viewesv:changed ---------------- ');
      init();
    });
    $.subscribe('viewesv:changed:actfragment', function (evt, fragid) {
      console.log(' ---------- viewesv:changed:actfragment ---------------- ', fragid);
      if (actFrag && actFrag.id === fragid)
        return;
      init(mdl.getFragmentById(fragid));
    });

    init();

    return this;
  };
})(jQuery);