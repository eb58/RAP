/* global geom, QUnit */
//  coordinates: [
//    { pageNumber: 1, positions: [{x: 908, y: 117}, {x: 1529, y: 169}]  },
//    { pageNumber: 1, positions: [{x: 908, y: 117}, {x: 1529, y: 169}]  },
//  ];

QUnit.test('testset: geom ', function (assert) {
  var coordinates = [
    {pageNumber: 1, positions: [{x: 908, y: 117}, {x: 1529, y: 169}]},
    {pageNumber: 1, positions: [{x: 900, y: 147}, {x: 1528, y: 269}]}
  ];
  
  assert.deepEqual(geom.rectCreate({x:100,y:200},{x:10,y:10}),[{x:10,y:10},{x:100,y:200}]);
  assert.deepEqual(geom.rectCreate({x:100,y:20},{x:10,y:100}),[{x:10,y:20},{x:100,y:100}]);
  assert.deepEqual(geom.rectSizeOf([{x: 1, y: 1}, {x: 11, y: 11}]), {w: 10, h: 10});
  assert.deepEqual(geom.rectSizeOf(coordinates[0].positions), {w: 621, h: 52});
  assert.deepEqual(geom.sizeOfAreaCoord(coordinates[0]), {w: 621, h: 52});
});