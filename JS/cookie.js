class Cookie{
   
    constructor (){
        // this.x=x;
        // this.y=y;
        this.width=143;
        this.height=208;
        this.x=550;
        this.y=fondo.y+fondo.height-this.height-120;
        this.jumping=true,
        this.x_velocity=2,
        this.y_velocity=10,
        this.image1 = new Image();
        this.image1.src = 'https://image.ibb.co/kL2AKe/stand.png'; 
    }

    //Colisión con platos y galleta
    colision(item){
    //MAU
    return  (this.x+35 < item.x + item.width) &&
            (this.x + this.width-50 > item.x) &&
            (this.y+180 < item.y) &&
            (this.y + this.height > item.y - 10);

    
    //DYLAN
        /*     if(this.x > item.x + item.width) return false;
        if(this.x +  this.width < item.x) return false;
        if (this.y > item.y + item.height) return false;
        if(this.y +  this.height < item.y) return false;
        return true  */

    //BETSY
        // var restrictions = this.x < item.x || 
        //                     this.x > item.x + 300 ||
        //                     this.y < item.y ||
        //                     this.y > item.y + 30;
        // return !restrictions;
    }

    draw() {
        if (this.y + this.height < canvas.height){
            this.y+=this.y_velocity;
        } else {
            cookie.jumping = true;
        }
        
        ctx.drawImage(this.image1, this.x, this.y, this.width, this.height);
                
    }
    
}
       
//          

