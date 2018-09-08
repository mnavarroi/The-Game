class Chip{
    constructor (){
        this.x=600;
        this.y=165;
        this.width=40;
        this.height=40;
        this.image = new Image ();
        this.image.src = 'https://image.ibb.co/d6f5Ke/choc40.png';   
    }

    collision(item){
        return (this.x < item.x + item.width) &&
            (this.x + this.width > item.x) &&
            (this.y < item.y + item.height) &&
            (this.y + this.height > item.y);
    }

}

var chispa = new Chip();