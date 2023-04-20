/* global _,jQuery, fabric, esvMasks, utils, CONSTS *//*jshint multistr: true */
(function ($) {
  "use strict";
  $.fn.viewmain = function (mdl, opts) {
    var id = this[0].id;
    this.id = id;
    var defopts = {};
    var myopts = $.extend({}, defopts, opts);

    this.html('\n\
        <div id="both-left">\n\
          <div id="viewesv">ESV</div>\n\
          <div id="viewpdf">PDF</div>\n\
        </div>\n\
        <div id="viewwrk"></div>\n\
    ');

    // create views
    var viewesv = $('#viewesv').viewesv(mdl);
    var viewpdf = $('#viewpdf').viewpdf(mdl);
    var viewwrk = $('#viewwrk').viewwrk(mdl);

    $("#both-left").resizable({
      handles: 'e',
      minWidth: 100,
    });
    $("#viewesv").resizable({
      handles: 's',
      minHeight: 50,
      maxHeight: $("#both-left").height() - 50,
      resize: function () {
        $("#contentesv #canvases").height($("#viewesv").height() - 60);
        $("#contentpdf").height($("#both-left").height() - $("#viewesv").height() - 60);
      }
    });
    $("#contentesv #canvases").height($("#viewesv").height() - 20);
    $("#contentpdf").height($("#both-left").height() - $("#viewesv").height() - 60);

    $(window).on('resize', function () {
      $("#contentpdf").height($("#both-left").height() - $("#viewesv").height() - 60);
    })

    return _.extend(this, viewesv);
  };
})(jQuery);