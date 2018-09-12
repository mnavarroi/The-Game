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

    //Colisión con platos y galleta
    colision() {
        posicionPlatos.forEach( (element) => {

            var xx = (this.x >= element.x + 300)
            var yy = (this.y >= element.y)
            console.log(xx, yy)
            if  (xx && yy) {
                console.log("entro al if")
                this.y = element.y;
            } else {
                // console.log("no entra")
            } 
          });
    }
    draw() {
        ctx.drawImage(this.image1, this.x, this.y, this.width, this.height);
                
    }
    
}
       
//          

var cookie = new Cookie();