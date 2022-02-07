const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

//scope
let graphm, car, pos, vel, frontWheel, backWheel;

graph = new GraphBackGround();
car = new Image();
car.src = "Images/car.png";

frontWheel = new Image();
frontWheel.src = "Images/wheel.png";
frontWheel.angle = 0;
frontWheel.dAngle = 0.1;

backWheel = new Image();
backWheel.src = "Images/wheel.png";
backWheel.angle = 0;
backWheel.dAngle = 0.1;

pos = 0;
vel = 2;

car.addEventListener('load',()=>{
    animate();
})

function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,width,height);
    graph.draw();

    context.drawImage(car,pos,height-car.height);
    pos += vel;
    if (pos > width){
        pos = -car.width;
    }

    context.save();
    context.translate(748+pos,635);
    context.rotate(frontWheel.angle);
    context.drawImage(frontWheel,-frontWheel.width/2,-frontWheel.width/2)
    context.restore();
    
    context.save();
    context.translate(210+pos,635);
    context.rotate(backWheel.angle);
    context.drawImage(backWheel,-backWheel.width/2,-backWheel.width/2)
    context.restore();
    
    frontWheel.angle += vel / 0.5/frontWheel.width;
    backWheel.angle += vel / 0.5/backWheel.width;

    
    //214+pos,635
}
