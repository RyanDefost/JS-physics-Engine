const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

//scope
let graph, face, time, hours, minuts, seconds, hoursHand,minutsHand,secondsHand;

graph = new GraphBackGround();
face = new Image();
face.src = "images/clock.png";

time = new Date();
hours = time.getHours();
minuts = time.getSeconds();
seconds = time.getSeconds();
console.log(time)

secondsHand.src = "Images/"

animate();

function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,width,height);
    graph.draw();

    //drawImgage(Image,x,y,h,w)
    context.drawImage(face,width/2 - (face.width)/2,height/2 - (face.height)/2)

}
