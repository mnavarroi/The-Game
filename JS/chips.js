var posicionChispas = [
    //x horizontal y vertical se va a ir a menos (-)
    //primera fila
    {x:150, y: 400},
    {x:150, y: 300},
    {x:150, y: 200},
    {x:150, y: 100},
    //segunda fila
    {x:300, y: 450},
    {x:300, y: 350},
    {x:300, y: 250},
    {x:300, y: 150},
    {x:300, y: 50},
    //tercera fila
    {x:450, y: 400},
    {x:450, y: 300},
    {x:450, y: 200},
    {x:450, y: 100},
    //cuarta fila
    {x:600, y: 450},
    {x:600, y: 350},
    {x:600, y: 250},
    {x:600, y: 150},
    {x:600, y: 50},
    //quinta fila
    {x:750, y: 400},
    {x:750, y: 300},
    {x:750, y: 200},
    {x:750, y: 100},
    //sexta fila
    {x:900, y: 450},
    {x:900, y: 350},
    {x:900, y: 250},
    {x:900, y: 150},
    {x:900, y: 50},
    //séptima fila
    {x:1050, y: 400},
    {x:1050, y: 300},
    {x:1050, y: 200},
    {x:1050, y: 100},
    
]


class Chip{
    constructor (){
        this.x=600;
        this.y=165;
        this.width=30;
        this.height=30;
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
        posicionChispas.forEach(p => {
            // this.image.src = chispa[Math.floor(Math.random() * (chispa.length - 1)) + 1].src
            ctx.drawImage(this.image, p.x, p.y, this.width, this.height);
        })
    }

}

var chispa = new Chip();