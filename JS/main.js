var canvas = document.getElementById('full-canvas');
var ctx= canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var frames = 0;
var interval = setInterval(function(){
    frames++;
   ctx.clearRect(0,0,400,200)
   fondo.draw();
   cookie.draw();
}, 1000/60);


//Parte de los controles

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
  
      cookie.y_velocity -= 55; //Cuánto salta
      cookie.jumping = true;
  
    }
  
    //es la velocidad con la que camina este dude
    if (controller.left) {
      cookie.x_velocity -= 1;
    }
  
    if (controller.right) {
      cookie.x_velocity += 1;
    }
  
    cookie.y_velocity += 1.3;// gravedad. El valor original es 1.5, puse 1.2 para que llegue más fácil a las
    cookie.x += cookie.x_velocity;
    cookie.y += cookie.y_velocity;
    cookie.x_velocity *= 0.9;// friction
    cookie.y_velocity *= 0.9;// friction
  
    // if cookie is falling below floor line
    if (cookie.y > 510 - 38 - 40) {
  
      cookie.jumping = false;
      cookie.y = 510 - 38 - 40;
      cookie.y_velocity = 0;
  
    }
  
    // if cookie is going off the left of the screen
    if (cookie.x < 0 - 143) { //el 40 es el tamaño de la imagen
      cookie.x = canvas.width; //Tamaño del width del canvas
    }
    if (cookie.x > canvas.width) {// if cookie goes past right boundary
      cookie.x = 0 - 143;
   }
  
   
  
    // call update when the browser is ready to draw again
    window.requestAnimationFrame(loop);
  
  };
  
  window.addEventListener("keydown", controller.keyListener)
  window.addEventListener("keyup", controller.keyListener);
  window.requestAnimationFrame(loop);

function start (){
    interval
}

start()