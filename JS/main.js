var canvas = document.getElementById('full-canvas');
var ctx= canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var cookie = new Cookie();
var chispa = new Chispa();
var plato = new Plato();
var fondo = new Background();
var frames = 0;
var fondoCae = false;

var audios = {
    game: "http://k003.kiwi6.com/hotlink/13nrs27rt0/juego.mp3",
    salto: "http://k003.kiwi6.com/hotlink/w3cerzxaw9/jump.mp3",
}

var audioMain = new Audio();
// var salto = new Audio;


//Helpers

function start(){
    interval = setInterval(update, 1000 / 60);
}

function update() {
    frames++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    control();  
    fondoCae = pararFondo();
    // console.log(fondoCae);
    fondoMovimiento();
    // if (caer = false);
    fondo.draw();
    drawChispas();
    drawPlatos();
    cookie.draw();
    reaparecer();

    // timer();
    // console.log(fondo.y)
}



function restart(){
    if(interval !== undefined) return;
    frames = 0;
    start();
}

function gameOver() {
    console.log('pierdes')

    clearInterval(interval);
    $("canvas").css("display", "none");
    $("body").text(`You lost! try again`);
//     ctx.font = "30px Avenir"
//     ctx.fillText("Oh no, se derritieron todas las chispas", 1250, 200)
//     ctx.fillText("Presiona Enter para intentarlo de nuevo", 1250, 240);    
 }
    
    
    /*  if (timeleft() <= 0)
    console.log("timer jala")
    return;
    ctx.font = "30px Avenir"
    ctx.fillText("Oh no, se derritieron todas las chispas", 250, 200)
    ctx.fillText("Presiona Enter para intentarlo de nuevo", 250, 240); */
    
    


function cookieLeft (){
    cookie.x-=6;
}

function cookieRight (){
    cookie.x+=6;
}


function fondoMovimiento(){
    if(fondoCae === true){
        fondo.y += 1.4 //velocidad con la que cae el fondo
        p.forEach(function(plato){
            plato.y += 1.4;
        })
        ch.forEach(function(chispa){
            chispa.y += 1.4;
        })
    }else{
        fondo.y;
        control();  
        
    }
}


function salto (){
    // fondoCae = true;
    cookie.y-=350;
    
    if(keys[39]===true) {
        cookie.x+=50;
    }
    if(keys[37]===true) {
        cookie.x-=50;
    }
    cookie.jumping = false;
}

function pararFondo(){
    // console.log(cookie.y )
    if(fondo.y > -100 || 
        cookie.y + 2 > 494) {
            if(-2183 < fondo.y && cookie.y + 2 > 494) {
                gameOver();
                
            }
            // if (fondo.y)
            return  false;
        } 
        return true;

}
    
    
    function drawPlatos(){
        p.forEach(plato => {
            plato.draw();
            if(cookie.colision(plato)){
                cookie.y = plato.y - cookie.height+10; //en +2 está sobre el plato exacto
                cookie.jumping = true; 
                // console.log("jala");
                
            }
        });
    }
    
    function drawChispas(){
        ch.forEach((chispa, index) => {
            chispa.draw();
            if(cookie.colision(chispa)){
                ch.splice(index, 1);
                return false;
                
            }
            
        })
    }
    
    /* function drawChispas(){
        ch.forEach(chispa => {
            chispa.draw();
            if(cookie.colision(chispa)){
                if((chispa.x>=cookie.x && chispa.x<=cookie.x+cookie.width) || (chispa.x+chispa.width>=chispa.x && chispa.x+chispa.width<=cookie.x+cookie.width)){
                    if((chispa.y>=chispa.y && chispa.y<=cookie.y+cookie.height) || (chispa.y+chispa.height>=cookie.y && chispa.y+chispa.height<=cookie.y+cookie.height)){
                        console.log ("toca la chispa");
                    }
                    
                })
            }
        }    
    }       */  
    
    
    function reaparecer (){
        if (cookie.x < -143)  //el 143 es el ancho de la galleta
        cookie.x = canvas.width;    
        else if (cookie.x > canvas.width) {
            cookie.x = -143;
        }
    }
    
    // // si la galleta se pasa de la pantalla del lado izquierdo
    // if (cookie.x < canvas.width - 143) { //el 143 es el ancho de la galleta
    //     cookie.x = 0-143;
    // }
    // //si la galleta se pasa de la pantalla del lado derecho
    // if (cookie.x > canvas.width) {
    //     cookie.x = 0 - 143;
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
        // console.log(e.keyCode)
        if (e.keyCode === 38 && cookie.jumping) {
            salto();
        }
    })
    
    
    //Checar este código
    addEventListener("keydown", function (e){
        // console.log(e.keyCode)
        if (e.keyCode === 13) {
            restart();
        }
    })
    
    function control (){
        if (keys[37]===true) cookieLeft();
        if (keys[39]===true) cookieRight();
    }
    
    
    start();