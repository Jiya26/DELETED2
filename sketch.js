var ground,box;


function setup() {
  createCanvas(1200,400);
  
  ground = new Ground(600,400,1200,20);
}

function draw() {
  background(255,255,255);  
  ground.display();
  drawSprites();
}