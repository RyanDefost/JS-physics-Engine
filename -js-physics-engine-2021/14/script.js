const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

//scope
let graph,A,B,C,ab,ac,cb,P_ab,P_ac,P_cb,S;

graph = new GraphBackGround();
A = new Point(200,200,"15","red",true);
B = new Point(400,300,"15","purple",true);
C = new Point(300,500,"15","blue",true);

S = new Point(0,0,"10","white",false);

ab = new LinearFunction(0,0);
ac = new LinearFunction(0,0);
cb = new LinearFunction(0,0);

P_ab = new LinearFunction(0,0);
P_ac = new LinearFunction(0,0);
P_cb = new LinearFunction(0,0);

animate();

function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,width,height);

    graph.draw();

    ab.lineThroughTwoPoints(A,B);
    ac.lineThroughTwoPoints(C,A);
    cb.lineThroughTwoPoints(B,C);

    ab.draw("lightGray");
    ac.draw("lightGray");
    cb.draw("lightGray");
    
    context.beginPath();
    context.fillStyle = "rgba(255,0,255,0.3)";
    context.moveTo(A.x,A.y);
    context.lineTo(B.x,B.y);
    context.lineTo(C.x,C.y);
    context.closePath();
    context.fill();

    P_ab.slope = -1/ab.slope;
    P_ab.intercept = C.y - P_ab.slope*C.x;

    P_ac.slope = -1/ac.slope;
    P_ac.intercept = B.y - P_ac.slope*B.x;

    P_cb.slope = -1/cb.slope;
    P_cb.intercept = A.y - P_cb.slope*A.x;

    P_ab.draw("blue");
    P_ac.draw("purple");
    P_cb.draw("red");

    S.x = P_ab.intersection(P_ac).x;
    S.y = P_ab.intersection(P_ac).y;
    

    A.draw();
    B.draw();
    C.draw();

    S.draw();
}