class Cookie{
    
    constructor (){
        // this.x=x;
        // this.y=y;
        this.width=143;
        this.height=208;
        this.x=550;
        this.y=fondo.y+fondo.height-this.height-10;
        this.jumping=true,
        this.x_velocity=10,
        this.y_velocity=10,
        this.image = new Image();
        this.image.src = 'https://image.ibb.co/kL2AKe/stand.png'; 
    }
    
    colision(item){
        return(this.x < item.x + item.width) &&
        (this.x + this.width > item.x) &&
        (this.y < item.y) &&
        (this.y + this.height > item.y);
    }

    colision1(item){
        return  (this.x+45 < item.x + item.width) &&
        (this.x + this.width-50 > item.x) &&
        (this.y+195 < item.y) &&
        (this.y + this.height > item.y - 10);
    }
/*     original
    colision(item){
        return  (this.x+45 < item.x + item.width) &&
        (this.x + this.width-50 > item.x) &&
        (this.y+180 < item.y) &&
        (this.y + this.height > item.y - 10);
    } */
    
    draw() {
        if (this.y + this.height < canvas.height){
            this.y+=this.y_velocity;
        } else {
            cookie.jumping = true;
        }
        
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);   
    }
    
}      