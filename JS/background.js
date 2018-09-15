class Background{
    constructor(){
        this.x= 0;
        this.y= -2185;
        this.width = 1300;
        this.height = 2890;
        this.image = new Image();
        this.image.src = 'https://image.ibb.co/dQABaU/Background_1.png';
        this.music = new Audio ();
	    this.music.src = "http://k003.kiwi6.com/hotlink/13nrs27rt0/juego.mp3"
    }

    gameOver(){
        ctx.fillStyle = 'rgba(225,225,225,0.8)';
        ctx.fillRect(20,20,150,100);
        ctx.font = "80px Avenir";
        ctx.fillText("Game Over", 400,350);
        ctx.font = "20px Serif";
        ctx.fillStyle = 'peru';
        ctx.fillText("Press 'Esc' to reset", 400,350);
    }

    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}

var fondo = new Background();