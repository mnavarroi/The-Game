var posicionChispas = [
    //x horizontal y vertical se va a ir a menos (-)
    {x:150, y: 400},
    {x:650, y: 280},
    {x:880, y:130},
    {x:400, y:60},
    {x:5, y:5},
]


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
    
    draw() {
        if(frames % 10 === 0) this.x -= 0;
        posicionPlatos.forEach(p => {
            //this.image.src = platos[Math.floor(Math.random() * (platos.length - 1)) + 1].src
            ctx.drawImage(this.image, p.x, p.y, this.width, this.height);
        })
    }

}

var chispa = new Chip();