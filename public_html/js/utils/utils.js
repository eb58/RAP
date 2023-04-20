var utils = (function () {
  var n = 1;
  return {
    genId: function genId(prefix) {
      return prefix + Math.floor(Math.random() * 10000) + '-' + new Date().getTime() + n++;
    },
    clone: function (o) {
      return $.extend(true, $.isArray(o) ? [] : {}, o);
    },
    log: function log() {
      (window.logging || localStorage['rap.logging']) && console.log.apply(console, [].slice.call(arguments, 0));
    },
    restrictToCanvasWhenMoving: function restrictToCanvasWhenMoving(obj) {
      var c = obj.canvas;
      obj.setCoords();
      var br = obj.getBoundingRect();
      if (br.top < 0) {
        obj.top = 0;
      }
      if (br.left < 0) {
        obj.left = 0;
      }
      if (br.top + br.height > c.height) {
        obj.top = c.height - br.height + obj.top - br.top
      }
      if (br.left + br.width > c.width) {
        obj.left = c.width - br.width + obj.left - br.left;
      }
    },
    restrictToCanvasWhenScaling: (function () {
      var scalexOk, scaleyOk;
      return function (obj, startSize) {
        var c = obj.canvas;
        var outside = false;
        obj.setCoords();
        var br = obj.getBoundingRect();
        if (br.top < 0) {
            obj.setTop(0);
            obj.setScaleY(1);
            obj.setHeight(startSize.height + startSize.top - 1);
        }
        if (br.left < 0) {
            obj.setLeft(0);
            obj.setScaleX(1);
            obj.setWidth(startSize.width + startSize.left - 1);
        }
        if (br.top + br.height - 1 > c.height) {
          outside = true
        }
        if (br.left + br.width - 1 > c.width) {
          outside = true
        }
        if (outside) {
          obj.setScaleX(scalexOk);
          obj.setScaleY(scaleyOk);
        } else {
          scalexOk = obj.scaleX;
          scaleyOk = obj.scaleY;
        }
      }
    })(),
    resetStrokeWidth: function resetStrokeWidth(obj) {
      if (obj.scaleX === 1) {
        obj.strokeWidth = 1 / obj.scaleY;
      } else if (obj.scaleY === 1) {
        obj.strokeWidth = 1 / obj.scaleX;
      } else {
        obj.strokeWidth = 1 / ((obj.scaleX + obj.scaleY) / 2);
      }
    },
  }
})();

// polyfills:
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value: function (searchElement, fromIndex) {

      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If len is 0, return false.
      if (len === 0) {
        return false;
      }

      // 4. Let n be ? ToInteger(fromIndex).
      //    (If fromIndex is undefined, this step produces the value 0.)
      var n = fromIndex | 0;

      // 5. If n >= 0, then
      //  a. Let k be n.
      // 6. Else n < 0,
      //  a. Let k be len + n.
      //  b. If k < 0, let k be 0.
      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      function sameValueZero(x, y) {
        return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
      }

      // 7. Repeat, while k < len
      while (k < len) {
        // a. Let elementK be the result of ? Get(O, ! ToString(k)).
        // b. If SameValueZero(searchElement, elementK) is true, return true.
        // c. Increase k by 1. 
        if (sameValueZero(o[k], searchElement)) {
          return true;
        }
        k++;
      }

      // 8. Return false
      return false;
    }
  });
}
if (!String.prototype.includes) {
  String.prototype.includes = function (search, start) {
    'use strict';
    if (typeof start !== 'number') {
      start = 0;
    }

    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}

Object.defineProperty(
  Object.prototype,
  'renameProperty',
  {
    writable: false, // Cannot alter this property
    enumerable: false, // Will not show up in a for-in loop.
    configurable: false, // Cannot be deleted via the delete operator
    value: function (oldName, newName) {
      // Do nothing if the names are the same
      if (oldName === newName) {
        return this;
      }
      // Check for the old property name to 
      // avoid a ReferenceError in strict mode.
      if (this.hasOwnProperty(oldName)) {
        this[newName] = this[oldName];
        delete this[oldName];
      }
      return this;
    }
  }
);

