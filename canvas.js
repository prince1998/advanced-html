var canvas = document.querySelector('canvas'); // to grab canvas element
//to extend size of canvas to full screen - to remove margin put body margin as 0
canvas.width = window.innerWidth; 
canvas.height = window.innerHeight;

//declaring context
var c = canvas.getContext('2d'); //to get all the methods for drawing in 2d 

//Rectangle
// c.fillStyle = 'rgba(255,0,0,0.5)';
// c.fillRect(100,100,100,100); //fillRect(x,y,width,height) here x and y are relative to the top left of the screen
// c.fillStyle = 'rgba(0,0,255,0.5)';
// c.fillRect(400,100,100,100);
// c.fillStyle = 'rgba(0,255,0 ,0.5)';
// c.fillRect(300,300,100,100);

// Line
// c.beginPath();
// c.moveTo(50,300);
// c.lineTo(300,100);
// c.lineTo(400,300);
// c.strokeStyle = "#fa34a3";
// c.stroke();

// Arc / Circle
// c.beginPath(); // to start afresh and prevent any previous drawings from connecting
// c.arc(300, 300, 30, 0, Math.PI * 2,false); // c.arc(x,y,radius,startAngle (in radian),endAngle (in radian), drawCounterClockwise)
// //startAngle - at what angle you want to start drawing
// //endAngle - How long you want the arc to go along for; Math.PI * 2 will give full arc ie from the very beginnning to the very end
// c.strokeStyle = 'blue';
// c.stroke();


// Arc / Circle
// for(var i = 0; i<3; i++){
//     //Math.random() returns a random value between 0 and 1
//     var x = Math.random() * window.innerWidth; // value anywhere between 0 to full width of screen
//     var y = Math.random() * window.innerHeight;// value anywhere between 0 to full height of screen
//     c.beginPath();
//     c.arc(x,y,30,0,Math.PI * 2, false);
//     c.strokeStyle = 'blue';
//     c.stroke();
// }


// Animation
// Animation works by moving the object in each refresh bit by bit giving illusion of animation
var x = Math.random() * innerWidth;;
var dx = (Math.random() - 0.5) * 8; //Subtracting by 0.5 to get postive as well as negative value
// If 1 is generated, you will get 0.5; if 0 is generated you will get -0.5 so all conditions are coming
var y = Math.random() * innerHeight;
var dx = (Math.random() - 0.5) * 8;
var radius = 30;
function animate() {
    requestAnimationFrame(animate); //recursively call same function to animate till stopped by some trigger
    // console.log("This is gonna be called recursively!")
    c.clearRect(0,0,innerWidth,innerHeight); //used to clear canvas each time so that circles dont draw over each other
    c.beginPath();
    c.arc(x,y,radius,0,Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.stroke();
    if (x+radius > innerWidth || x - radius < 0) {
        dx = -dx;
    }
    if (y+radius > innerHeight || y - radius < 0) {
        dy = -dy;
    }

    x += dx;
    y += dy;
}

animate();