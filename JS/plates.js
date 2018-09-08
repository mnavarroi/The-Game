var platos = [
    { x: 250, y: 135 },
    { x: 256, y: 167 },
    { x: 35, y: 446}
]

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

var platosazules = new Platoazul();