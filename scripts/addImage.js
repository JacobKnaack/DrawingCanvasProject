//adds image to canvas
function addImage(image){
  var canvas = document.getElementById('artboard');
  var ctx = canvas.getContext('2d');

  var background = new Image();

  if (image.files && image.files[0]) {
    var reader = new FileReader();

    reader.onload = function( e ) {
      background.src = e.target.result;
      background.style.width = '740px';
      background.style.height = '900px';
      console.log(background);
    };
    reader.readAsDataURL(image.files[0]);
  }

  background.onload = function() {
    ctx.drawImage(background,0,0);
  };
}
