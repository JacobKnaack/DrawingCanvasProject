// Bind a function to scale and rotate the group
// to the animation loop.
two.bind('update', function(frameCount) {
  // This code is called everytime two.update() is called.
  // Effectively 60 times per second.
  if (group.scale > 0.9999) {
    group.scale = group.rotation = 0;
  }
  var t = (1 - group.scale) * 0.125;
  group.scale += t;
  group.rotation += t * 4 * Math.PI;
}).play();  // Finally, start the animation loop
