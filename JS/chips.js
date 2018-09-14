var posicionChispas = [
    //de prueba borrar después de tests
    {x:150, y: 300},
    {x:450, y: 200},
    {x:750, y: 100},
    
    //primera fila
    // {x:150, y: -2100},
    {x:150, y: -2000},
    {x:150, y: -1900},
    {x:150, y: -1800},
    {x:150, y: -1700},
    {x:150, y: -1600},
    //segunda fila
    {x:300, y: -2050},
    {x:300, y: -1950},
    {x:300, y: -1850},
    {x:300, y: -1750},
    {x:300, y: -1650},
    //tercera fila
    // {x:450, y: -2100},
    {x:450, y: -2000},
    {x:450, y: -1900},
    {x:450, y: -1800},
    {x:450, y: -1700},
    {x:450, y: -1600},
    //cuarta fila
    {x:600, y: -2050},
    {x:600, y: -1950},
    {x:600, y: -1850},
    {x:600, y: -1750},
    {x:600, y: -1650},
    //quinta fila
    // {x:750, y: -2100},
    {x:750, y: -2000},
    {x:750, y: -1900},
    {x:750, y: -1800},
    {x:750, y: -1700},
    {x:750, y: -1600},
    //sexta fila
    {x:900, y: -2050},
    {x:900, y: -1950},
    {x:900, y: -1850},
    {x:900, y: -1750},
    {x:900, y: -1650},
    // {x:900, y: -1650},
    //séptima fila
    // {x:1050, y: -2100},
    {x:1050, y: -2000},
    {x:1050, y: -1900},
    {x:1050, y: -1800},
    {x:1050, y: -1700},
    {x:1050, y: -1600},

]


class Chispa{
    constructor (x,y){
        this.x=x;
        this.y=y;
        this.width=30;
        this.height=30;
        this.image = new Image ();
        this.image.src = 'https://image.ibb.co/d6f5Ke/choc40.png';   
    }
    
    colision(item){
        return  (this.x+45 < item.x + item.width) &&
        (this.x + this.width-50 > item.x) &&
        (this.y+180 < item.y) &&
        (this.y + this.height > item.y - 10);
    }
    
    draw() {
        if(frames % 10 === 0) this.x -= 0;
        posicionChispas.forEach(ch => {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        });
    }
}

var ch = [];
posicionChispas.forEach(pos => {
    ch.push(new Chispa(pos.x, pos.y))
});