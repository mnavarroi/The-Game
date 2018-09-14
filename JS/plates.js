var posicionPlatos = [
    {x:150, y: 420}, //1
    {x:650, y: 300}, //2
    {x:950, y:130}, //3
    {x:400, y:60}, //4
    {x:5, y:-85}, //5
    {x:450, y:-320 }, //6
    {x:920, y:-600}, //7
    {x:20, y:-500}, //8
    {x:450, y:-720 }, //9
    {x:-40, y:-850}, //10
    {x:700, y:-950 }, //11
    {x:450, y:-1000 }, //12
    {x:120, y:-1200 }, //13
    {x:850, y:-1300 }, //14
    {x:350, y:-1360 }, //15    
]

class Plato{
    constructor (x,y){
        this.x=x;
        this.y=y;
        this.width=300;
        this.height=30;
        this.image = new Image ();
        this.image.src = 'https://image.ibb.co/h9eRCz/plato1.png';
    }
    
    draw(){
        if(frames % 10 === 0) this.x -= 0;
        posicionPlatos.forEach(p => {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        });
    }
}

var p = [];
posicionPlatos.forEach(pos => {
    p.push(new Plato(pos.x, pos.y))
});

//Platos de otros colores

/* var platos = [
    { src: 'https://image.ibb.co/h9eRCz/plato1.png' },
    { src: 'https://image.ibb.co/ntOmCz/plato2.png' },
    { src: 'https://image.ibb.co/mkUhkK/plato3.png'}
]

platforms() {
    posicionPlatos.forEach(elem => {
        this.x = elem.x;
        this.y = elem.y;
        this.image = new Image();
        this.image.src = elem.imageSrc;
        if (
            cookie.collisionPlatform(this.x, this.y) &&
            cookie.y + cookie.height < this.y + cookie.gravity
            ) {
                cookie.gravity = 0;
                cookie.jumping = false;
                cookie.y = this.y - cookie.height;
            }
        }
    } */
    
    
    /*
    class Platoamarillo{
        constructor (){
            this.x=800;
            this.y=350;
            this.width=300;
            this.height=30;
            this.imageamarillo = new Image ();
            this.imageamarillo.src = 'https://image.ibb.co/h9eRCz/plato1.png';
        }
        
        draw(){
            if(frames % 10 === 0) this.x -= 0;
            ctx.drawImage(this.imageamarillo, this.x, this.y, this.width, this.height);
        }
    }
    
    var platosamarillos = new Platoamarillo();
    
    
    class Platorojo{
        constructor (){
            this.x= 75;
            this.y=250;
            this.width=500;
            this.height=35;
            this.imagerojo = new Image ();
            this.imagerojo.src = 'https://image.ibb.co/ntOmCz/plato2.png';
        }
        
        draw(){
            if(frames % 10 === 0) this.x -= 0;
            ctx.drawImage(this.imagerojo, this.x, this.y, this.width, this.height);
        }
    }
    
    var platosrojos = new Platorojo();
    
    
    class Platoverde{
        constructor (){
            this.x=0;
            this.y=10;
            this.width=350;
            this.height=25;
            this.imageverde = new Image ();
            this.imageverde.src = 'https://image.ibb.co/mkUhkK/plato3.png';
        }
        
        draw(){
            if(frames % 10 === 0) this.x -= 0;
            ctx.drawImage(this.imageverde, this.x, this.y, this.width, this.height);
        }
    }
    
    var platosverdes = new Platoverde();
    
    
    
    class Platoazul{
        constructor (){
            this.x=600;
            this.y=60;
            this.width=350;
            this.height=35;
            this.imageazul = new Image ();
            this.imageazul.src = 'https://image.ibb.co/gkP4ze/plato4.png';
        }
        
        draw(){
            if(frames % 10 === 0) this.x -= 0;
            ctx.drawImage(this.imageazul, this.x, this.y, this.width, this.height);
        }
    }
    
    var platosazules = new Platoazul();*/