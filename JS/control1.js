
// var cookie = {

//   width:50,
//   height:75,
//   jumping:true,
//   x:244, // centro del canvas
//   x_velocity:2,
//   y:100,
//   y_velocity:2,

// };

var controller = {

  left:false,
  right:false,
  up:false,
  keyListener:function(event) {

    var key_state = (event.type == "keydown")?true:false;

    switch(event.keyCode) {

      case 37:// izquierda
        controller.left = key_state;
      break;
      case 38:// arriba
        controller.up = key_state;
      break;
      case 39:// derecha
        controller.right = key_state;
      break;

    }

  }

};

var loop = function() {

  if (controller.up && cookie.jumping == false) {

    cookie.y_velocity -= 45; //Cuánto salta
    cookie.jumping = true;

  }

  if (controller.left) {
    cookie.x_velocity -= 0.5;
  }

  if (controller.right) {
    cookie.x_velocity += 0.5;
  }

  cookie.y_velocity += 1.5;// gravity
  cookie.x += cookie.x_velocity;
  cookie.y += cookie.y_velocity;
  cookie.x_velocity *= 0.9;// friction
  cookie.y_velocity *= 0.9;// friction

  // if cookie is falling below floor line
  if (cookie.y > 550 - 38 - 40) {

    cookie.jumping = false;
    cookie.y = 550 - 38 - 40;
    cookie.y_velocity = 0;

  }

  // if cookie is going off the left of the screen
  if (cookie.x < -40) { //el 40 es el tamaño de la imagen

    cookie.x = 700; //Tamaño del width del canvas

  } else if (cookie.x > 700) {// if cookie goes past right boundary

    cookie.x = -40;

  }

  context.fillStyle = "#202020";
  context.fillRect(0, 0, 700, 580);// x, y, width, height
  context.fillStyle = "#ff0000";// hex for red
  context.beginPath();
  context.rect(cookie.x, cookie.y, cookie.width, cookie.height);
  context.fill();
  context.strokeStyle = "#202830";
  context.lineWidth = 4;
  context.beginPath();
  context.moveTo(0, 550);
  context.lineTo(700, 550);
  context.stroke();

  // call update when the browser is ready to draw again
  window.requestAnimationFrame(loop);

};

window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);