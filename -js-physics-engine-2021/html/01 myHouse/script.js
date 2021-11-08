const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

context.beginPath();
context.strokeStyle = "black"
context.fillStyle = "rgba(255, 0, 0, .4)"

context.moveTo(300, 100);
context.lineTo(700, 200);
context.lineTo(600, 400);
context.lineTo(200, 300);
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.strokeStyle = "black"
context.fillStyle = "gray"
context.moveTo(700, 200);
context.lineTo(800, 300);
context.lineTo(600, 400);
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.moveTo(800, 300);
context.lineTo(800, 500);
context.lineTo(600, 600);
context.lineTo(600, 400);
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.moveTo(200, 300);
context.lineTo(600, 400);
context.lineTo(600, 600);
context.lineTo(200, 500);
context.closePath();
context.stroke();
context.fill();