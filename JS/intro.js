class Cover{
    constructor(){
        this.x= 0;
        this.y=-15;
        this.width = 1300;
        this.height = 700;
        this.image = new Image();
        this.image.src = 'https://image.ibb.co/e5t3Up/cover1.png';
    }

    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}

var intro = new Cover();