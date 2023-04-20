/* global QUnit */

QUnit.test('testset: model ', function (assert) {
  var done = assert.async();
  getPdfMgr('../../data/pdfs/mondstadt.pdf', function (pdfmgr) {
    // prepare model
    var mdl = rapModel(pdfmgr);
    mdl.getPage(0).setPageType('Deckblatt');
    mdl.getPage(1).setPageType('Bestandsverzeichnis');
    mdl.getPage(3).setPageType('Abteilung I');
    mdl.getPage(5).setPageType('Abteilung II');
    mdl.getPage(7).setPageType('Abteilung III');
    
    var rec = mdl.addRecord('TEST1');
    var fid1 = rec.addFragment(0, {x: 0, y: 75}, {x: 740, y: 125});
    mdl.getFragmentById(fid1).addArea(mdl.createArea(0, {x: 0, y: 355}, {x: 740, y: 495}));
    var fid2 = rec.addFragment(0, {x: 0, y: 200}, {x: 740, y: 325});
    mdl.getFragmentById(fid2).addArea(mdl.createArea(0, {x: 0, y: 355}, {x: 740, y: 495}));
    mdl.getFragmentById(fid2).addArea(mdl.createArea(0, {x: 0, y: 555}, {x: 740, y: 595}));

    rec = mdl.addRecord('TEST2');
    rec.addFragment(0, {x: 0, y: 375}, {x: 740, y: 425});
    rec.addFragment(1, {x: 0, y: 175}, {x: 740, y: 225});

    // test model
    assert.ok(!!mdl, 'model exists');
    assert.ok(mdl.getPages().length === 9, 'Pagecount ok');
    assert.equal(mdl.getPage(0).getPageType(), 'Deckblatt', 'getting pagetype  ok');
    assert.equal(mdl.getPage(2).getPageType(), '', 'getting pagetype  ok');

    assert.ok(!!mdl.getFragmentById(fid2), 'getting fragment by id  ok');
    assert.equal(mdl.getFragments().length, 4, 'number of  fragments  ok');
    assert.equal(mdl.getFragmentById(fid2).coordinates.length, 3, 'coords  ok');
    done();
  });
});
