class Background{
    constructor(){
        this.x= 0;
        this.y= -2185;
        this.width = 1300;
        this.height = 2890;
        this.image = new Image();
        this.image.src = 'https://image.ibb.co/dQABaU/Background_1.png';
       /*  this.music = new Audio ()
	    this.music.src = "http://k003.kiwi6.com/hotlink/13nrs27rt0/juego.mp3" */
    }

    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}

var fondo = new Background();