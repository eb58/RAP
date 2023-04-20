var geom = {
  inInterval: function inInterval(x, interval) {
    return interval[0] <= x && x <= interval[1];
  },
  pointAdd: function pointAdd(p1, p2) {
    return {x: p1.x + p2.x, y: p1.y + p2.y}
  },
  pointSub: function pointAdd(p1, p2) {
    return {x: p1.x - p2.x, y: p1.y - p2.y}
  },
  pointEqual: function pointEqual(p1, p2) {
    return  p1.x === p2.x && p1.y === p2.y;
  },
  pointInRect: function (p, r) {
    return geom.inInterval(p.x, [r[0].x, r[1].x]) && geom.inInterval(p.y, [r[0].y, r[1].y]);
  },
  rectInRect: function (r1, r2) { // r1 contained in  r2 
    return geom.pointInRect(r1[0], r2) && geom.pointInRect(r1[1], r2);
  },
  rectCreate: function rectCreate(p1, p2) {
    return [{x: Math.min(p1.x, p2.x), y: Math.min(p1.y, p2.y)}, {x: Math.max(p1.x, p2.x), y: Math.max(p1.y, p2.y)}];
  },
  rectSizeOf: function (rect) { // i.e. rect = [{x:3, y:3 },{x:88, y:30}] 
    var tl = rect[0];
    var br = rect[1];
    return {w: Math.abs(br.x - tl.x), h: Math.abs(br.y - tl.y)};
  },
  sizeOfAreaCoord: function (coord) { // i.e. coord = { pageNumber: 3, positions: [{x:3, y:3 },{x:88, y:30}] }
    return geom.rectSizeOf(coord.positions);
  },
}

