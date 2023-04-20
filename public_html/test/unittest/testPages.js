/* global QUnit, CONSTS */

QUnit.test('testset: pages ', function (assert) {
  var done = assert.async();
  getPdfMgr('../../data/pdfs/mondstadt.pdf', function (pdfmgr) {
    var mdl = new ModelRap(pdfmgr);
    assert.ok(!!mdl, 'model exists');
    assert.ok(mdl.getPages().length === 9, 'Pagecount ok');

//    var done1 = assert.async();
//    mdl.getPageAsBase64(0, function (s) {
//      var expected = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABGMAAAMaCAYAAAAiJ4uDAAAgAElEQVR4XuzdB5QkVfk34EtY4pJcw';
//      assert.equal(s.substr(0,expected.length),expected, 'get page 0 as base64');
//      done1()
//    })
//    var done2 = assert.async();
//    mdl.getPageAsBase64(1, function (s) {
//      var expected = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABGMAAAMaCAYAAAAiJ4uDAAAgAElEQVR4XuzdBZhtVRk38G0rBiqI2C1iBwoo2AqiKBaohIWkhS1tKwZKKYoiYWNgi4iB3aIoFhKK3Yn5Pb/9fe98+27OzJyZOXPmzLn/9Tz3u';
//      assert.equal(s.substr(0,expected.length),expected, 'get page 0 as base64');
//      done2();
//    })
//
    mdl.setPageType(mdl.getPage(0), 'Deckblatt');
    assert.equal(mdl.getPageType(mdl.getPage(0)),'Deckblatt', 'setting pagetype  ok');
    done();
  });
});
