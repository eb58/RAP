/* global _ ,jQuery*/
(function ($) { "use strict";
  $.fn.ebbind = function (data, key, onChange ) {
    var id = this[0].id;
    var type = this[0].type;
    var self = this;

    key = key || id;
    if (type === 'text' || type === 'password') {
      this.val(data[key]).off().on('change', function () {
        data[key] = self.val();
        onChange && onChange(self);
        console.log('text changed ' + id, data[key], data);
      }).on('keyup', function () {
        data[key] = self.val();
        onChange && onChange(self);
        console.log('text keyup ' + id, self, data[key], data);
      });
    } else if (type === 'checkbox') {
      this.prop('checked', data[key]).off().on('click', function () {
        data[key] = self.prop('checked');
        onChange && onChange(self);
        console.log('checkbox changed ' + id, data[key], data);
      });
    } else if ($('select', this).length) {
      this.setSelectedValue(data[key]).off().on("selectmenuchange", function () {
        var v = parseInt( self.getSelectedValue() );
        data[key] = v || self.getSelectedValue();
        onChange && onChange(self);
        console.log('select changed ' + id, data[key], data);
      });
      this.setSelectedValue(data[key]).off().on("change", function () {
        var v = parseInt( self.getSelectedValue() );
        data[key] = v || self.getSelectedValue();
        onChange && onChange(self);
        console.log('select changed ' + id, data[key], data);
      });
    } else if ($('input:radio', this).length) {
      this.val(data[key]).off().on("change", function () {
        data[key] = self.val();
        onChange && onChange(self);
        console.log('radio changed ' + id, data[key], data);
      });
    } else if ($('textarea', this).length) {
      var $ta = $('textarea', this);
      $ta.val(data[key], this).off().on('keyup', function () {
        data[key] = $ta.val();
        onChange && onChange(self);
        console.log('textarea changed ' + id, data[key], data);
      });
      this.setTextAreaCounter();
    } else if ($('.ebselect', this).length) {
      var $sel = $('input:checkbox', this);
      if(data[key] ) data[key].forEach(function (v) {
        onChange && onChange(self);
        if (_.isNumber(v)) {
          $($sel[v]).prop('checked', true);
        } else {
          $('#' + v.replace(/ /g, ''), self).prop('checked', true);
        }
      });
      $sel.off().on('click', function () {
        data[key] = self.getSelectedValuesAsString();
        onChange && onChange(self);
        console.log('ebselect changed ' + id, data[key], data);
      });
    }
    return this;
  };
})(jQuery);