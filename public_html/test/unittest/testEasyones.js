/* global QUnit */
QUnit.test('testset: easy ones', function (assert) {
  var done = assert.async();
  getPdfMgr('../../data/pdfs/mondstadt.pdf', function (pdfmgr) {
    var m = new ModelRap(pdfmgr);
    assert.ok(!!m, 'model exists');

    var rec1 = m.addRecord(m.createRecord('TEST1'));

    var frag0 = m.addFragment(m.createFragment(m.createArea(0, {x: 10, y: 10}, {x: 10, y: 100}),'A3E_Recht'));
    //var a1 = m.addArea(m.getFragmentById(frag0.id), m.createArea(0, {x: 0, y: 355}, {x: 740, y: 495}));
    //var a2 = m.addArea(m.getFragmentById(frag0.id), m.createArea(0, {x: 0, y: 555}, {x: 740, y: 595}));
    m.addFragment2Record(rec1, frag0);
    m.addFragment2Record(rec1, m.addFragment(m.createFragment(m.createArea(0, {x: 0, y: 75}, {x: 740, y: 125}),'A3E_Recht')));


    assert.ok(m.getPages().length === 9, 'Pagecount ok');
    assert.ok(m.getFragments().length === 2, 'Fragmentanzahl ok');
    var c = m.getFragments()[0].coordinates;
    delete c[0].id;
    assert.deepEqual(c, [{pageNumber: 0, positions: [{x: 10, y: 10}, {x: 10, y: 100}]}], 'Coords ok');
    done();
  });
});