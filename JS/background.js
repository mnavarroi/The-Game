class Background{
    constructor(){
        this.x= 0;
        this.y= -2205;
        this.width = 1300;
        this.height = 2890;
        this.image = new Image();
        this.image.src = 'https://image.ibb.co/hRwHXz/Background.png';
    }

    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}

var fondo = new Background();