class Background{
    constructor(){
        this.x= 0;
        this.y= -2185;
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

class Arrow{
    constructor(){
        this.x= 1000;
        this.y= 340;
        this.width = 170;
        this.height = 300;
        this.image = new Image();
        this.image.src = 'https://image.ibb.co/gGkQfU/arrow.png';
    }

    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}

var flecha = new Arrow();