var canvas = document.getElementById('full-canvas');
var ctx= canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var frames = 0;

//El loop
var loop = function() {
  
    if (controller.up && cookie.jumping == false) {
      cookie.y_velocity -= 55; //Cuánto salta
      cookie.jumping = true;
    }
  
    //es la velocidad con la que camina la galleta
    if (controller.left) {
      cookie.x_velocity -= 1;
    }
  
    if (controller.right) {
      cookie.x_velocity += 1;
    }
  
    cookie.y_velocity += 1.3;// gravedad. El valor original es 1.5, puse 1.2 para que llegue más fácil a los platos
    cookie.x += cookie.x_velocity;
    cookie.y += cookie.y_velocity;
    cookie.x_velocity *= 0.9;// fricción
    cookie.y_velocity *= 0.9;// fricción
  
    // línea base
    if (cookie.y > 530 - 38 - 40) {
  
      cookie.jumping = false;
      cookie.y = 530 - 38 - 40;
      cookie.y_velocity = 0;
  
    }
  
    // si la galleta se pasa de la pantalla del lado izquierdo
    if (cookie.x < 0 - 143) { //el 143 es el ancho de la galleta de la imagen
      cookie.x = canvas.width; //Tamaño del width del canvas
    }
    if (cookie.x > canvas.width) {// si la galleta se pasa de la pantalla del lado derecho
      cookie.x = 0 - 143;
   }
   
     
   
  
// call update when the browser is ready to draw again
window.requestAnimationFrame(loop);
  
};
  
window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);



//Helpers

function start(){
    interval = setInterval(function(){
        
/*     //Colisión con platos y galleta
     posicionPlatos.forEach(function(item) {
         colX = cookie.x - item.y;
         coyY = cookie.y - item.x;
        if  (colX == 0 && colY == 0)
            cookie.jumping == false; 
        // (this.x=200 || this.y=400);
      }); */

              
    //Colisión con platos y galleta
 /*     posicionPlatos.forEach(function(element) {
        var xx = (cookie.x >= element.x + 300)
        var yy = (cookie.y == element.y)
        if  (xx == true && yy == true)
            cookie.jumping == false; 
            newcookie.y == cookie.y;

      }); */

        fondo.draw();
        flecha.draw(); 
        platos.draw();
        cookie.draw();
        // chispas.draw();
        sobrePlatos();
    }, 1000/60);
    
} 

function sobrePlatos(){
    // for (var i=0; i<posicionPlatos.length; i++) {
        cookie.colision(posicionPlatos[0]);
        // console.log(cookie.colision(posicionPlatos[1]))
    // }
}


function restart(){
    if(interval !== undefined) return;
    frames = 0;
    start();
}


function gameOver(){
    clearInterval(interval);
    // board.music.pause() //Falta la música para activar esta función
    interval = undefined;
}


// function checkGameOver(){
	// if(timeleft == 0) {
		// gameOver()
            // ctx.font = "200 28px Helvetica"
            // ctx.fillText("The chocolate melted", width/2, height/2);
            // ctx.fillText("Press R to help Crispy again", width/2, height/2 + 40);
		// }


/*//draw win
if(status === 'win'){
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = '#fff';
    ctx.font = '20pt Helvetica';
    ctx.textAlign = 'center';
    ctx.fillText("¡LO LOGRASTE!", width/2, height/2);
    ctx.fillText("Presiona R para intentarlo de nuevo", width/2, height/2 + 40);
}*/

//ejemplo de restart
// addEventListener('keydown', function(event){
// if(event.keyCode === 13){
//     ctx.clearRect(0,0,canvas.width,canvas.height)
//     // board.music.play() 
//     start()
// }


start();
