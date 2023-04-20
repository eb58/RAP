/* global _,jQuery, PDFJS */
/*jshint multistr: true */
(function ($) {
  "use strict";
  $.fn.ebviewpdf = function (opts) {
    var id = this[0].id;
    this.id = id;

    var defopts = {
      borderWidth: '1px',
      borderCol: 'lightgrey',
      borderStyle: 'solid',
      scale: 2
    };
    var myopts = $.extend({}, defopts, opts);

    (function (a) {
      var s = _.template('\n\
        <div class="ebviewpdf">\n\
          <div id=pagination></div>\n\
          <canvas id="the-canvas" style="border-width:<%=borderWidth%>;border-color:<%=borderCol%>; border-style:<%=borderStyle%>;"></canvas>\n\
        </div>\n')
        ({borderWidth: myopts.borderWidth, borderCol: myopts.borderCol, borderStyle: myopts.borderStyle});
      a.html(s);
    })(this);

    var pdfDoc = null;
    var pageNum = 1;
    var pageIsRendering = false;
    var pageNumPending = null;
    var fcanvas = new fabric.Canvas('the-canvas');
    fcanvas.setWidth(900);
    fcanvas.setHeight(600);

    function renderPage(num) {
      pageIsRendering = true;
      pdfDoc.getPage(num).then(function (page) {
        var viewport = page.getViewport( fcanvas.getWidth()/ page.getViewport(1).width );
        var renderTask = page.render({
          canvasContext: fcanvas.getContext(),
          viewport: viewport
        });
        console.log('w',page.getViewport(myopts.scale).width, 'h',page.getViewport(myopts.scale).height);

        // Wait for rendering to finish
        renderTask.promise.then(function () {
          pageIsRendering = false;
          if (pageNumPending !== null) { // New page rendering is pending
            renderPage(pageNumPending);
            pageNumPending = null;
          }
        });
      });
      $('#page_num').text(pageNum); // Update page counters
    }

    // If another page rendering in progress, waits until the rendering is finised. Otherwise, executes rendering immediately.
    function queueRenderPage(pgNum) {
      pageNum = pgNum;
      if (pageIsRendering) {
        pageNumPending = pgNum;
      } else {
        renderPage(pgNum);
      }
    }

    function onPageClick(pageNum) {
      queueRenderPage(pageNum);
    }

    PDFJS.getDocument(opts.pdfurl).then(function (doc) { // Asynchronously downloads PDF.    
      pdfDoc = doc;
      $('#page_count').text(pdfDoc.numPages);
      renderPage(pageNum);
      $('#pagination').pagination({
        nextText: '>',
        prevText: '<',
        items: pdfDoc.numPages,
        itemsOnPage: 1,
        cssStyle: 'compact-theme',
        onPageClick: onPageClick
      });
    });
    return this;
  };
})(jQuery);