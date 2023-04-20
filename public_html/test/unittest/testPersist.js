/* global QUnit, utils */
QUnit.test('testset: persist', function (assert) {
  var o = {
    data: 1,
    f: function () {
      this.data++;
    },
    oo: {
      data: 1,
      f: function () {
        this.data++
      }
    }
  };

  // manipulate o
  o.f();
  o.oo.f();

  // store in JSON
  var s = JSON.stringify(o);

  // read in prototype again; next program start for example
  o = {
    data: 1,
    f: function () {
      this.data++;
    },
    oo: {
      data: 1,
      f: function () {
        this.data++
      }
    }
  };

  // create new object from JSON
  var parsedJSON = JSON.parse(s);
  assert.equal(parsedJSON.data, 2, 'loaded correctly');
  assert.equal(parsedJSON.oo.data, 2, 'loaded correctly');
  assert.equal(parsedJSON.f, undefined, 'no function');
  assert.equal(parsedJSON.oo.f, undefined, 'no function');

  // create new object from prototype and parsedJSON
  var onew = $.extend(true, {}, o, parsedJSON); // true -> deep !
  assert.equal(onew.data, 2);
  assert.equal(onew.oo.data, 2);

  // manipulate onew
  onew.f();
  onew.oo.f();

  assert.equal(o.data, 1, 'orig object unchanged');
  assert.equal(o.oo.data, 1, 'orig object unchanged');
  assert.equal(onew.data, 3, 'new object updated');
  assert.equal(onew.oo.data, 3, 'new object updated');

});

QUnit.test('testset: clone2', function (assert) {

  var o = {
    data: 1,
    f: function () {
      this.data++;
    },
    oo: {
      data: 1,
      f: function () {
        this.data++
      }
    }
  };

  var c1 = utils.clone(o);

  // manipulate o
  o.f();
  o.oo.f();
  assert.equal(o.data, 2, 'orig object changed');
  assert.equal(o.oo.data, 2, 'orig object changed');
  assert.equal(c1.data, 1, 'cloned object unchanged');
  assert.equal(c1.oo.data, 1, 'cloned subobject unchanged');

  var c2 = utils.clone(o);

  assert.equal(c2.data, 2, 'data object correct');
  assert.equal(c2.oo.data, 2, 'data subobject correct');

  // manipulate onew
  c2.f();
  c2.oo.f();

  assert.equal(o.data, 2, 'orig object unchanged');
  assert.equal(o.oo.data, 2, 'orig object unchanged');
  assert.equal(c2.data, 3, 'new object updated');
  assert.equal(c2.oo.data, 3, 'new object updated');

});

QUnit.test('testset: clone2', function (assert) {

  var arr = [{x:1},{x:2},{x:3}]

  var c1 = utils.clone(arr);

  // manipulate arr
  arr[0].x = 1000;
  assert.equal(c1[0].x, 1, 'cloned object unchanged');
});