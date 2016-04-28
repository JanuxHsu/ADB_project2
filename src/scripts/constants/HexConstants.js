var edge = 220;
var hexEdge = edge * Math.sin(60 * Math.PI / 180.0)/2;

module.exports = {
  HexHeight : edge,
  HexWidth : hexEdge * 2,
  hexEdge : hexEdge,
  rowHeight : edge - (hexEdge/2) - 6,
};
