var canvas = document.getElementById('full-canvas');
var ctx= canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var cookie = new Cookie();

var frames = 0;

var fondoCae = false;

//El loop
// var loop = function() {

//     if (controller.up && cookie.jumping == false) {
//       cookie.y_velocity -= 55; //Cuánto salta
//       cookie.jumping = true;
//     }

//     //es la velocidad con la que camina la galleta
//     if (controller.left) {
//       cookie.x_velocity -= 1;
//     }

//     if (controller.right) {
//       cookie.x_velocity += 1;
//     }

//     cookie.y_velocity += 1.3;// gravedad. El valor original es 1.5, puse 1.2 para que llegue más fácil a los platos
//     cookie.x += cookie.x_velocity;
//     cookie.y += cookie.y_velocity;
//     cookie.x_velocity *= 0.9;// fricción
//     cookie.y_velocity *= 0.9;// fricción

//     // línea base
//     if (cookie.y >= 450 ) {

//       cookie.jumping = false;

//       cookie.y = 450;
//       cookie.y_velocity = 0;

//     }

//     // si la galleta se pasa de la pantalla del lado izquierdo
//     if (cookie.x < 0 - 143) { //el 143 es el ancho de la galleta de la imagen
//       cookie.x = canvas.width; //Tamaño del width del canvas
//     }
//     if (cookie.x > canvas.width) {// si la galleta se pasa de la pantalla del lado derecho
//       cookie.x = 0 - 143;
//    }




// call update when the browser is ready to draw again
// window.requestAnimationFrame(loop);

// };

// window.addEventListener("keydown", controller.keyListener)
// window.addEventListener("keyup", controller.keyListener);
// window.requestAnimationFrame(loop);



//Helpers

function start(){
    interval = setInterval(function(){
        control();  
        
        fondoMovimiento();
        fondo.draw();
        flecha.draw(); 
        //platos.draw();
        
        // chispas.draw();
        drawPlatos();
        cookie.draw();
        //sobrePlatos();
    }, 1000/60);
    
} 

// function cookieJump (){
//     if (controller.up){
//         cookie.y-=300;
//     }
// }

function cookieLeft (){
    cookie.x-=6;
}

function cookieRight (){
    cookie.x+=6;
}


function fondoMovimiento(){
    if(fondoCae === true){
        fondo.y += 0.3
        p.forEach(function(plato){
            plato.y+=0.3;
        })
        
    }
}


function salto (){

    fondoCae = true;
    cookie.y-=350;
        // fondo.y+=350;
        // posicionPlatos.forEach(function (plato) {
        //     plato.y+=180;
        // })
        
    if(keys[39]===true) {
        cookie.x+=50;
    }
    if(keys[37]===true) {
        cookie.x-=50;
    }
    
    cookie.jumping = false;
}



// }
// console.log( cookie.y_velocity);
// function sobrePlatos(){
//     // for (var i=0; i<posicionPlatos.length; i++) {
//         cookie.colision(posicionPlatos[0]);
//         if (cookie.colision(posicionPlatos[0])){
//             cookie.y_velocity = 0;
//             console.log(cookie.y,  cookie.y_velocity)
//         }
//         // console.log(cookie.colision(posicionPlatos[0]))
//     // }
// }

function drawPlatos(){
    p.forEach(plato => {
        plato.draw();
        if(cookie.colision(plato)){
            cookie.y = plato.y - cookie.height+10; 
            cookie.jumping = true; 
            console.log("jala");
    
        }
    });
}
            
            
            
            //DYLAN
            //     cookie.jumping = false;
            
            // cookie.y = cookie.y - plato.y  ;
            //  cookie.y_velocity = 0;
            // }
            // } else {
            //     cookie.y-140;
            //     //cookie.x;
            // }
            
            // if(cookie.colision(plato))  cookie.y =  10, cookie.y_velocity=0 ;
            
            
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
            
            cookie.jumping = true;
            var keys = [];
            
            addEventListener("keydown",function(e){
                if (e.keyCode === 37) keys[e.keyCode] = true;
                if (e.keyCode === 39) keys[e.keyCode] = true;
            })
            
            addEventListener("keyup",function(e){
                if (e.keyCode === 37) keys[e.keyCode] = false;
                if (e.keyCode === 39) keys[e.keyCode] = false;
            })
            
            addEventListener("keydown", function (e){
                console.log(e.keyCode)
                if (e.keyCode === 38 && cookie.jumping) {
                    salto();
                }
                // if (e.keyCode === 37) {
                //     cookie.x-=30;
                // }
                
            })
            
            function control (){
                if (keys[37]===true) cookieLeft();
                if (keys[39]===true) cookieRight();
            }
            
            
            start();