const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

//scope
let graph,A,B,C,S,l,m;

//Defining variables
graph = new GraphBackGround();
A = new Point(300,300,15,"rgba(255,0,0,0.5)",true);
B = new Point(500,300,15,"rgba(0,0,255,0.5)",true);
C = new Point(500,500,15,"rgba(0,255,0,0.5)",true);
S = new Point(0,0,10,"rgba(0,0,0,0.5)",true);

l = new LinearFunction(0,0);
m = new LinearFunction(0,0);


animate();

function animate(){
    requestAnimationFrame(animate)
    context.clearRect(0,0,width,height);

    //Draw
    graph.draw();


    // slope = rise / run
    l.slope = (B.y - A.y)/(B.x - A.x);

    // intercept = y - slope * x
    l.intercept = B.y - l.slope * B.x;
    drawLine(l, "magenta");
    
    //perpendicular line on l
    // slope = -1 / slope
    m.slope = -1 / l.slope;

    // intercept = y - slope * x
    m.intercept = C.y - m.slope * C.x
    drawLine(m, "green")

    //intersection l and m
    // l; y = l.slope  * x + l.intercept
    // m; y = m.slope  * x + m.intercept
    // l.x = m.x
    //l.y = m.y =>
    // l.slope * x + l.intercept               = m.slope * x + m.intercept
    // l.slope * x + l.intercept - m.slope * x = m.slope * x + m.intercept - m.slope * x
    // l.slope * x + l.intercept - m.slope * x = m.slope * x + m.intercept - l.intercept
    // (l.slope - m.slope) * x = (m.intercept - l.intercept)
    // x = (m.intercept - l.intercept) / (l.slop - m.slope)

    S.x = (m.intercept - l.intercept) / (l.slope - m.slope)
    S.y = l.y(S.x);

    

    A.draw();
    B.draw();
    C.draw();
    S.draw();
}


function drawLine(line,color){
    context.beginPath();
    context.lineWidth = "4";
    context.strokeStyle = color;
    context.moveTo(0,line.y(0));
    context.lineTo(width,line.y(width));
    context.closePath();
    context.stroke();
}