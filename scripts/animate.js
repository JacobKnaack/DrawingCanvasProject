var mouseOver;
var mouseDrag;
var offSet;
var update = true;

function dragShapes() {
  stage.enableMouseOver(10);
  stage.mouseMoveOutside = true;

  var shape;
}

function shapeMove(event) {

}

function stop() {
  createjs.Ticker.removeEventListener("tick", tick);
}

function ticke(event) {
  if (update) {
    update = false;
    stage.update(event);
  }
}
