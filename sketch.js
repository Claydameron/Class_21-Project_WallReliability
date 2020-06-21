var bullet;
var thickness, wall;
var speed,weight;
var damage;
var percentage;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(100,191,25,10);
  bullet.shapeColor = "lightBlue"
  thickness = random(22,83);
  wall = createSprite(1200,200,thickness,height/2);
  speed = random(223,321);
  weight = random(30,52);

  damage = 0;

  percentage = 0;
}

function draw() {
  background(0); 

  if(keyDown("space")) {
    bullet.velocityX = speed;
  }

  if(hasCollided(bullet,wall)) {
    bullet.velocityX = 0;
    damage = round(0.5 * weight * speed * speed/(thickness*thickness*thickness));
    percentage = round(damage/10*100);

    if (damage >= 10) {
      wall.shapeColor = "red";
    }

    if (damage < 10) {
      wall.shapeColor = "green";
    }
  
  }
  
  //if (bullet.isTouching(wall))
  drawSprites();
  fill("yellow");
  text("Damage = " + damage,100,20);
  text ("Damage Percentage = " + percentage + "%", 200,20);
}

function hasCollided(lbullet,lwall) {
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if (bulletRightEdge >= wallLeftEdge) {
   return true;
  }
  return false;


}

