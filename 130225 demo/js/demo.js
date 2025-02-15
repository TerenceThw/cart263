const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
let particlesArray =[];
const numOfParticles = 300;

class particle {
    constructor(x,y){
        this.x =x;
        this.y=y;
        this.size =Math.random()*15+1;
        this.weight =Math.random()*1+5;
        this.directionX =1;
        this.color =`hsl(${Math.random() *360}, 100%, 70%)`;
    }

    update(){
        if(this.y>canvas.height){
            this.y = 0-this.size;
            this.weight=2;
            this.x= Math.random()*canvas.width*0.8;
        }
        this.weight+=0.05;
        this.y+=this.weight;
        this.x+= this.directionX*0.8;
    }

    draw(){
        ctx.fillStyle= this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y,this.size, 0, 360);
        ctx.closePath();
        ctx.fill();
    }
}

function init(){
    for(let i=1; i<numOfParticles; i++){
        const x = Math.random()*canvas.width;
        const y = Math.random()*canvas.height;
        particlesArray.push(new particle(x,y));

    }

}
init();

function animate(){
    ctx.fillStyle='rgb(255,255,255,0.01)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    for (let i =0;i<particlesArray.length;i++){
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    requestAnimationFrame(animate);

}
animate();



