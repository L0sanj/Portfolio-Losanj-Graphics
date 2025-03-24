const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  
  
  "#a8e6cf", // Très clair (vert pastel)
  "#81c784", // Vert clair
  "#66bb6a",
  "#4caf50",
  "#43a047", 
  "#388e3c", // Vert plus soutenu
  "#2c6e2f",
  "#1b5e20", 
  "#1b4d21", // Vert plus foncé
  "#0e3b19", // Vert très foncé
  "#0a2f14",  // Vert très très foncé
  "#a8e6cf", // Très clair (vert pastel)
  "#81c784", // Vert clair
  "#66bb6a",
  "#4caf50",
  "#43a047", 
  "#388e3c", // Vert plus soutenu
  "#2c6e2f",
  "#1b5e20", 
  "#1b4d21", // Vert plus foncé
  "#0e3b19", // Vert très foncé
  "#0a2f14"  // Vert très très foncé
  
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();
