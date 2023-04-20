/* global QUnit, modelRap, utils */

QUnit.test('testset: model ', function (assert) {
  // setup model
  var done = assert.async();
  getPdfMgr('../../data/pdfs/mondstadt.pdf', function (pdfmgr) {
    var m = new ModelRap(pdfmgr);
    m.setPageType(m.getPage(0), 'Deckblatt');

    var rec1 = m.addRecord(m.createRecord('TEST1'));

    var frag0 = m.addFragment(m.createFragment(m.createArea(0, {x: 0, y: 200}, {x: 740, y: 325})));
    var a1 = m.addArea(m.getFragmentById(frag0.id), m.createArea(0, {x: 0, y: 355}, {x: 740, y: 495}));
    var a2 = m.addArea(m.getFragmentById(frag0.id), m.createArea(0, {x: 0, y: 555}, {x: 740, y: 595}));
    m.addFragment2Record(rec1, frag0);
    m.addFragment2Record(rec1, m.addFragment(m.createFragment(m.createArea(0, {x: 0, y: 75}, {x: 740, y: 125}))));
    //
    var rec2 = m.addRecord(m.createRecord('TEST1'));
    var frag1 = m.addFragment(m.createFragment(m.createArea(0, {x: 0, y: 175}, {x: 740, y: 225})));
    var frag2 = m.addFragment(m.createFragment(m.createArea(1, {x: 0, y: 37}, {x: 740, y: 425})));
    m.addFragment2Record(rec2, frag1);
    m.addFragment2Record(rec2, frag2);


    // test model
    assert.ok(!!m, 'model exists');
    assert.ok(m.getPages().length === 9, 'Pagecount ok');
    assert.equal(m.getPage(0).extType, 'Deckblatt');
    assert.equal(m.getPage(2).extType, '', 'getting pagetype  ok');
    assert.equal(m.getPageType(m.getPage(0)), 'Deckblatt');
    assert.equal(m.getPageType(m.getPage(2)), '', 'getting pagetype  ok');
    assert.equal(m.getRecords().length, 2, 'number of  records  ok');
    assert.equal(m.getRecord(0).fragmentLinks.length, 2, 'number of  fragmentlinks in record ok');

    assert.ok(!!m.getFragmentById(frag0.id), 'getting fragment by id  ok');
    assert.equal(m.getFragments().length, 4, 'number of  fragments  ok');
    assert.equal(m.getFragmentById(frag0.id).coordinates.length, 3, 'coords  ok');
    assert.equal(m.getFragmentById(frag1.id).coordinates.length, 1, 'coords  ok');
    assert.equal(m.getFragmentById(frag2.id).coordinates.length, 1, 'coords  ok');
    done();
//  m.save();
//  var json = m.getJSON();
//  var x = $.extend(true, {}, c, JSON.parse(json));
  });


});
QUnit.test('testset: model - join fragments', function (assert) {
  var done = assert.async();
  getPdfMgr('/data/pdfs/mondstadt.pdf', function (pdfmgr) {
    // setup model

    var m = new ModelRap(pdfmgr);
    
    var rec1 = m.addRecord(m.createRecord('TEST1'));

    var frag0 = m.addFragment(m.createFragment(m.createArea(0, {x: 0, y: 200}, {x: 740, y: 325})));
    var a1 = m.addArea(m.getFragmentById(frag0.id), m.createArea(0, {x: 0, y: 355}, {x: 740, y: 495}));
    var a2 = m.addArea(m.getFragmentById(frag0.id), m.createArea(0, {x: 0, y: 555}, {x: 740, y: 595}));
    m.addFragment2Record(rec1, frag0);
    m.addFragment2Record(rec1, m.addFragment(m.createFragment(m.createArea(0, {x: 0, y: 75}, {x: 740, y: 125}))));
    //
    var rec2 = m.addRecord(m.createRecord('TEST1'));
    var frag1 = m.addFragment(m.createFragment(m.createArea(0, {x: 0, y: 175}, {x: 740, y: 225})));
    var frag2 = m.addFragment(m.createFragment(m.createArea(1, {x: 0, y: 37}, {x: 740, y: 425})));
    m.addFragment2Record(rec2, frag1);
    m.addFragment2Record(rec2, frag2);


    // test model
    assert.ok(!!m, 'model exists');
    assert.ok(m.getPages().length === 9, 'Pagecount ok');
    assert.equal(m.getRecords().length, 2, 'number of  records  ok');
    assert.equal(m.getRecord(0).fragmentLinks.length, 2, 'number of  fragmentlinks in record ok');

    assert.ok(!!m.getFragmentById(frag0.id), 'getting fragment by id  ok');
    assert.equal(m.getFragments().length, 4, 'number of  fragments  ok');
    assert.equal(m.getFragmentById(frag0.id).coordinates.length, 3, 'coords  ok');
    assert.equal(m.getFragmentById(frag1.id).coordinates.length, 1, 'coords  ok');
    assert.equal(m.getFragmentById(frag2.id).coordinates.length, 1, 'coords  ok');
    done();

  })

//  m.save();
//  var json = m.getJSON();
//  var x = $.extend(true, {}, c, JSON.parse(json));


});

