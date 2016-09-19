//Shape selecting functions*****************
var isCircleSelected = null;
var isLineSelected = null;
var isRectSelected = null;
var isFreeSelected = null;

function eventClear() {
  $('#artboard').unbind('mouseup');
  $('#artboard').unbind('mousedown');
  $('#artboard').unbind('click');
  stage.removeEventListener("stagemousedown", freeMouseDown);
}

function circleSelect() {
  eventClear();
  circle = new createjs.Shape();
  stage.addChild(circle);

  isCircleSelected = true;
  isLineSelected = false;
  isRectSelected = false;
  isTriSelected = false;
}

function lineSelect() {
  eventClear();
  line = new createjs.Shape();
  stage.addChild(line);

  isCircleSelected = false;
  isLineSelected = true;
  isRectSelected = false;
  isTriSelected = false;
}

function freeSelect() {
  eventClear();
  freeLine = new createjs.Shape();
  stage.addChild(freeLine);

  isCircleSelected = false;
  isLineSelected = false;
  isRectSelected = false;
  isFreeSelected = true;
}

function rectSelect() {
  eventClear();
  rect = new createjs.Shape();
  stage.addChild(rect);

  isCircleSelected = false;
  isLineSelected = false;
  isRectSelected = true;
  isTriSelected = false;
}
//*******************************************

//selection functions for colors and removing drawings
var shapeColor = "black";
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'white'];

function selectColor(i) {
    shapeColor = colors[i];
}

function clearCanvas() {
  stage.removeAllChildren();
  stage.update();
}
//********************************************

//background upload function******************
var imageSelect = document.getElementById('image');
  imageSelect.addEventListener('change', imageUpload, false);//might need to remove event listener in eventClear()
var canvas = document.getElementById('artboard');
var ctx = canvas.getContext('2d');


function imageUpload(e) { //work in progress
  var reader = new fileReader();
  reader.onload = function(event) {
    var img = new image();
    img.onload = function() {
      ctx.drawImage(img, 0, 0);
    }
    img.src = event.target.result;
  }
  reader.readAsDataURL(e.target, files[0]);
}
