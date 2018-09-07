class Plates{
    constructor (){
        this.x=600;
        this.y=165;
        this.width=40;
        this.height=45;
        this.image = new Image ();
        this.imageam.src = 'https://image.ibb.co/h9eRCz/plato1.png';
        this.imagero.src = 'https://image.ibb.co/ntOmCz/plato2.png';
        this.imageve.src = 'https://image.ibb.co/mkUhkK/plato3.png';
        this.imageaz.src = 'https://image.ibb.co/gkP4ze/plato4.png';

    }

    draw(){
        if(frames % 10 === 0) this.x -= 15;
        ctx.drawImage(this.imageam, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.imagero, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.imageve, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.imageaz, this.x, this.y, this.width, this.height);
    }
}

var platos = new Plates();