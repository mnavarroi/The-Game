class Cookie{
   
    constructor (){
        this.x=550;
        this.y=840;
        this.width=143;
        this.height=208;
        this.jumping=true,
        this.x_velocity=2,
        this.y_velocity=2,
        this.image1 = new Image ();
        this.image1.src = 'https://image.ibb.co/kL2AKe/stand.png';
    }

    collision(item){
        return (this.x < item.x + item.width) &&
            (this.x + this.width > item.x) &&
            (this.y < item.y + item.height) &&
            (this.y + this.height > item.y);
    }

    draw(){
        ctx.drawImage(this.image1, this.x, this.y, this.width, this.height);
    }

}


var cookie = new Cookie();