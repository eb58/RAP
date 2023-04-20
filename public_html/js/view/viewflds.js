/* global _, jQuery, viewesv, CONSTS, viewmain, codesTables, */ /*jshint multistr: true */
(function ($) {
  "use strict";
  $.fn.viewflds = function (mdl, fields, fragid, opts) {
    var id = this[0].id;
    this.id = id;
    var defopts = {};
    var myopts = $.extend({}, defopts, opts || {});

    var genDatalists = function (flds) {
      var usedCodesTables = flds.reduce(function (acc, fld) {
        if (fld.codestable) {
          acc.push(fld.codestable);
        }
        return acc;
      }, []);
      return usedCodesTables.reduce(function (acc1, codestable) {
        var options = codesTables.getValues(codestable).reduce(function (acc2, code) {
          return acc2 + '<option value="' + code + '">';
        }, '');
        return acc1 + _.template('<datalist id="<%=codestable%>">\n<%=options%>\n\</datalist>')({
          codestable: codestable,
          options: options,
        });
      }, '');
    };
    function genIcon(fld) {
      switch (fld.fldtype) {
        case 'Date':
          return '<i class="fa fa-calendar" aria-hidden="true" title="Datum"></i>';
        case 'Text':
          return fld.codestable ? '<i class="fa fa-caret-down" aria-hidden="true" title="Auswahlfeld"></i>' : '';
      }
      return '';
    }

    var genRows = function (flds) {
      return flds ? flds.reduce(function (acc, fld) {
        var inputfld = _.template('<input type="<%=type%>" <%=list%> dataType="<%=dataType%>" id="<%=id%>" value="<%=val%>" datarappath="<%=datarappath%>" style="width:95%;">')({
          type: fld.fldtype === 'Checkbox' ? 'checkbox' : 'text',
          id: fld.id,
          val: fld.val,
          dataType: fld.fldtype,
          datarappath: fld.dataRapPath,
          list: fld.codestable ? 'list="' + fld.codestable + '"' : '',
        });
        var t = _.template('\
          <tr>\n\
            <td ><%=label%></td>\n\
            <td style="text-align:center;" ><%=inputfld%>&nbsp;</td>\n\
            <td><%=icon%></td>\n\
          </tr>\n')({
          label: fld.label,
          inputfld: inputfld,
          icon: genIcon(fld),
        });
        return acc + t;
      }, '') : '';
    };

    (function (a) {
      var s = _.template('\n\
        <div id="tblviewflds<%=fragid%>">\n\
          <table style="width:100%" >\n\
          <%=rows%>\n\
          </table>\n\
        </div>\n\
        <%=datalists%>\n')({
        fragid: fragid,
        rows: genRows(fields),
        datalists: genDatalists(fields),
      });
      a.html(s);

      fields.forEach(function (fld, index) {
        $('#' + fld.id).ebbind(fld, 'val', function (self) {
          mdl.isDirty = true;
          var id = self.attr('id');
          var params = mdl.findParametersByAssocFldId(id);
          params.forEach(function(param){
            param.text = self.val();
          })
        });
        if ($(fld).attr('codestable')) {
          $($('#viewflds input')[index]).parent().css({position: 'relative'});
        }
      })

      $('#viewflds input[type=text]').mouseover(function (evt) {
        setTimeout(function () {
          $(evt.target).attr('title', $(evt.target).val());
        }, 500)
      });
      $('#viewflds input[type=text]').mouseleave(function (evt) {
        $(evt.target).attr('title', "")
      });

      // set properties for fields of type date
      $('#viewflds input[datatype=Date]').datepicker({changeMonth: true, changeYear: true, });
      $('#viewflds .fa-calendar').click(function () {
        $(this).parent().datepicker("show");
      });

      function listElementClick(evt) {
        var $input = $(event.target).parent().parent().find('input');
        $input.val(evt.target.innerText);
        $('#tblviewflds' + fragid + ' input').trigger('change');
        $(event.target).parent().remove();
      }

      { //Events
        $('#viewwrk').on('click', function () {
          $('.kmdropdown').remove();
        });

        $('#viewflds .fa-caret-down').parent().on('click', function (event) {
          $('.kmdropdown').remove();
          event.stopPropagation();
          var input = $(this).parent().find('input');
          var $list = $("<div class='kmdropdown'>");
          var codesTableName = fields.filter(function (field) {
            return field.label === input.parent().prev().text()
          })[0].codestable;
          $list.html(codesTables.getValues(codesTableName).map(function (item, index) {
            return index !== 0 ? '<p>' + item + '</p>' : ''
          }));
          if ($list.html() !== '') {
            $list.css({
              top: input.offset().top + input.offset().height + 'px',
              left: '5px',
              width: input.outerWidth() + 'px'
            });
            $list.on('click', listElementClick);
            input.parent().append($list);
          }
        });

        $('#tblviewflds' + fragid + ' input').on('change', function () { // event field change
          console.log('updateData', $(this).prop('id'), $(this).val());
          var changedFld = _.findWhere(fields, {id: $(this).prop('id')});
          if (changedFld && changedFld.selParam) {
            changedFld.selParam.text = $(this).val()
          }
          var frag = mdl.findFragmentById(fragid);
          if (frag && frag.state === CONSTS.FRAGMENTSTATES.FREIGEGEBEN) {
            frag.state = CONSTS.FRAGMENTSTATES.INBEARBEITUNG;
            $.publish('viewflds:update:param');
          }
        });

        $('#tblviewflds' + fragid + ' tr td:first-child').on('click', function (evt) { // event click on label of field
          var selParam = viewmain.getSelectedParam();
          if (selParam) {
            var $input = $(evt.target).parent().find('td input');
            var $inputId = $input.prop('id');    //  ~  'AllgemeineParameterlfd_Nr_Eintragung1'
            selParam.rect.canvas.deactivateAll().renderAll();
            if (selParam.assocfldid !== $inputId) {
              selParam.assocfldid = $inputId;
              selParam.datarappath = $input.attr('datarappath');
              selParam.text = $input.val();
              $input.css('background-color', CONSTS.COLOR.PARAM.HIGHLIGHTED);
              if ($input.prop('type') === 'checkbox')
                $input.parent().css('background-color', CONSTS.COLOR.PARAM.HIGHLIGHTED);
              $.publish('viewflds:highlight:param', fragid + ':' + $inputId);

              var frag = mdl.findFragmentWithIncludingParamByParamId(selParam.id);
              if (frag && frag.state === CONSTS.FRAGMENTSTATES.FREIGEGEBEN) {
                frag.state = CONSTS.FRAGMENTSTATES.INBEARBEITUNG;
                $.publish('viewflds:update:param');
              }
            }
          }
        });
        $('#tblviewflds' + fragid + ' tr').on('dblclick', function (evt) {  //event doubleclick on input or label
          var $input = $(evt.target).parent().find('input');
          var $inputId = $input.prop('id');
          mdl.releaseAssociation(fragid, $inputId);
          $.publish('viewflds:unhighlight:param', fragid + ':' + $inputId);
          $input.css('background-color', evt.type === 'mouseover' ? CONSTS.COLOR.PARAM.HIGHLIGHTED : CONSTS.COLOR.PARAM.NOTHIGHLIGHTED);
        });
        $('#tblviewflds' + fragid + ' tr td:nth-child(1), #tblviewflds' + fragid + ' tr td:nth-child(2)').on('mouseover mouseleave', function (evt) { // Event mouseover+mouseleave on label of field or on field
          var $input = $(evt.target).parent().find('input');
          var $inputId = $input.prop('id');
          var params = mdl.findParametersInFragmentByAssocFldId(fragid, $inputId);
          if (params.length) {
            $input.css('background-color', evt.type === 'mouseover' ? CONSTS.COLOR.PARAM.HIGHLIGHTED : CONSTS.COLOR.PARAM.NOTHIGHLIGHTED);
            if ($input.prop('type') === 'checkbox')
              $input.parent().css('background-color', evt.type === 'mouseover' ? CONSTS.COLOR.PARAM.HIGHLIGHTED : '#ececec');
            $.publish(evt.type === 'mouseover' ? 'viewflds:highlight:param' : 'viewflds:unhighlight:param', fragid + ':' + $inputId);
          }
        });
        $('#tblviewflds' + fragid + ' input').on('focus blur', function (evt) { // Event mouseover mouseleave on label of field
          var $input = $(evt.target);
          var $inputId = $input.prop('id');
          var params = mdl.findParametersInFragmentByAssocFldId(fragid, $inputId);
          if (params.length) {
            $input.css('background-color', evt.type === 'focus' ? CONSTS.COLOR.PARAM.HIGHLIGHTED : CONSTS.COLOR.PARAM.NOTHIGHLIGHTED);
            if ($input.prop('type') === 'checkbox')
              $input.parent().css('background-color', evt.type === 'mouseover' ? CONSTS.COLOR.PARAM.HIGHLIGHTED : '#ececec');
            $.publish(evt.type === 'focus' ? 'viewflds:highlight:param' : 'viewflds:unhighlight:param', fragid + ':' + $inputId);
          }
        });
      }

      {// Subscriptions
        $.subscribe('viewesv:highlight', function (evt, selector) {
          selector && $('#tblviewflds' + selector).css('background-color', CONSTS.COLOR.PARAM.HIGHLIGHTED)
          $('#tblviewflds' + selector).prop('type') === 'checkbox' && $('#tblviewflds' + selector).parent().css('background-color', CONSTS.COLOR.PARAM.HIGHLIGHTED);
        });
        $.subscribe('viewesv:unhighlight', function (evt, selector) {
          selector && $('#tblviewflds' + selector).css('background-color', CONSTS.COLOR.PARAM.NOTHIGHLIGHTED)
          $('#tblviewflds' + selector).prop('type') === 'checkbox' && $('#tblviewflds' + selector).parent().css('background-color', '#ececec');
        });
      }

    })(this);
    return this;
  };
})(jQuery);