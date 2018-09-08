var canvas = document.getElementById('full-canvas');
var ctx= canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var frames = 0;

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
  

  //El loop
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
    cookie.x_velocity *= 0.9;// fricción
    cookie.y_velocity *= 0.9;// fricción
  
    // línea base
    if (cookie.y > 510 - 38 - 40) {
  
      cookie.jumping = false;
      cookie.y = 510 - 38 - 40;
      cookie.y_velocity = 0;
  
    }
  
    // si la galleta se pasa de la pantalla del lado izquierdo
    if (cookie.x < 0 - 143) { //el 143 es el ancho de la galleta de la imagen
      cookie.x = canvas.width; //Tamaño del width del canvas
    }
    if (cookie.x > canvas.width) {// si la galleta se pasa de la pantalla del lado derecho
      cookie.x = 0 - 143;
   }
   
      // si el plato rojo se pasa de la pantalla del lado izquierdo
      if (platosrojos.x < 0 - 500) { //el 500 es el ancho del plato de la imagen
        platosrojos.x = canvas.width; //Tamaño del width del canvas
      }
      if (platosrojos.x > canvas.width) {// si plato rojo se pasa de la pantalla del lado derecho
        platosrojos.x = 0 - 500;
     }
   
  
    // call update when the browser is ready to draw again
    window.requestAnimationFrame(loop);
  
  };
  
  window.addEventListener("keydown", controller.keyListener)
  window.addEventListener("keyup", controller.keyListener);
  window.requestAnimationFrame(loop);



//Helpers

// function intro(){
//     interval = setInterval(function(){
//         frames++;
//        intro.draw();
//     }, 1000/60);
// }

function start(){
    interval = setInterval(function(){
        // frames++; //Tal vez esta línea no sirva
       fondo.draw();
       platosamarillos.draw();
       platosrojos.draw();
       platosverdes.draw();
       platosazules.draw();
       cookie.draw();
       intro.draw();
       ctx.font = "200 28px Verdana"
       ctx.fillStyle = "#604035";
       ctx.fillText("Press Enter to start", 510, 620)
       
    }, 1000/60);
}

function restart(){
    if(interval !== undefined) return;
    frames = 0;
    start();
}


function gameOver(){
    clearInterval(interval);
    interval = undefined;
    ctx.font = "200 28px Verdana"
    ctx.fillText("The chocolate melted", 250, 200)
    ctx.fillText("Press R to help Crispy again", 250, 240);
}

//ejemplo
// addEventListener('keydown', function(event){
// if(event.keyCode === 13){
//     ctx.clearRect(0,0,canvas.width,canvas.height)
//     // board.music.play() 
//     start()
// }


//mío
// addEventListener("keydown", function(e){
//     if(e.keyCode === 83){
//         start();
//     }
// })

start();

// })