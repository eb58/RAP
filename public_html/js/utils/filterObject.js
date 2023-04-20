/* global _ */

var filterObject = (function () {

  var objHasPredicate = function objHasPredicate(o, pred) {
    if (pred(o))
      return true;
    var keys = _.keys(o);
    for (var i = 0, len = keys.length; i < len; i++) {
      if (objHasPredicate(o[keys[i]], pred))
        return true;
    }
    return false;
  };
  function filter(o, pred) { // make a deep copy, but leave out all properties in o, that do not have predicate 'pred'
    var ret = {};
    if (objHasPredicate(o, pred)) {
      _.keys(o).forEach(function (key) {
        if (_.isArray(o[key])) {
          var arr = [];
          o[key].forEach(function (elem) {
            var v = filter(elem, pred);
            if (v && _.keys(v).length) {
              arr.push(v);
            }
          });
          if (arr.length)
            ret[key] = arr;
        } else if (_.isObject(o[key])) {
          var v = filter(o[key], pred);
          if (v && _.keys(v).length) {
            ret[key] = v;
          }
        } else {
          ret[key] = o[key]
        }
      });
    }
    return ret;
  }
  return {
    objHasPredicate:objHasPredicate,
    filter: filter,
  }
})();