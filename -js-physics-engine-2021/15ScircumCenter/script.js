const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

//scope
let dist ,graph, A, B, C, ab, ac, bc, mAB, mAC, mBC, pab, pac, pbc, S;

graph = new GraphBackGround();
A = new Point(200,200,"15","red",true);
B = new Point(600,250,"15","purple",true);
C = new Point(400,500,"15","blue",true);
mAB = new Point(0,0,"5","white",false);
mBC = new Point(0,0,"5","white",false);
mAC = new Point(0,0,"5","white",false);

S = new Point(0,0,"5","black",false);

ab = new LinearFunction(0,0);
ac = new LinearFunction(0,0);
bc = new LinearFunction(0,0);

pab = new LinearFunction(0,0);
pac = new LinearFunction(0,0);
pbc = new LinearFunction(0,0);



animate();

function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,width,height);

    middelPoint();

    graph.draw();

    ab.lineThroughTwoPoints(A,B);
    ac.lineThroughTwoPoints(A,C);
    bc.lineThroughTwoPoints(B,C);

    
    ab.draw();
    ac.draw();
    bc.draw();
    
    FillTriangle(A,B,C,"rgba(255,0,255,0.3)");
    
    mAB.draw();
    mAC.draw();
    mBC.draw();
    
    pab.draw("rgba(0,0,0,0.3)");
    pac.draw("rgba(0,0,0,0.3)");
    pbc.draw("rgba(0,0,0,0.3)");

    pab.slope = -1 /(ab.slope);
    pab.intercept = mAB.y - pab.slope * mAB.x;

    pac.slope = -1 /(ac.slope);
    pac.intercept = mAC.y - pac.slope * mAC.x;

    pbc.slope = -1 /(bc.slope);
    pbc.intercept = mBC.y - pbc.slope * mBC.x;
    
    S.x = pab.intersection(pbc).x;
    S.y = pab.intersection(pbc).y;

    //Circle maken!
    dist = Math.sqrt((A.x -S.x)*(A.x -S.x) + (A.y -S.y)*(A.y -S.y));

    context.beginPath();
    context.fillStyle = "rgba(255,0,0,0.3)";
    context.arc(S.x,S.y,dist,0,Math.PI*2);
    context.stroke();
    context.fill();
    //

    S.draw();

    A.draw();
    B.draw();
    C.draw();
    
}

function middelPoint() {
    mAB.x = (A.x + B.x)/2;
    mAB.y = (A.y + B.y)/2;

    mAC.x = (A.x + C.x)/2;
    mAC.y = (A.y + C.y)/2;

    mBC.x = (B.x + C.x)/2;
    mBC.y = (B.y + C.y)/2;
}

function FillTriangle(A,B,C,color) {
    context.beginPath();
    context.fillStyle = color;
    context.moveTo(A.x,A.y);
    context.lineTo(B.x,B.y);
    context.lineTo(C.x,C.y);
    context.closePath();
    context.fill();
}