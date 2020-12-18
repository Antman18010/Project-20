var car1, car2, car3, car4;
var lane1, lane2, lane3;
var wall1, wall2, wall3, wall4;
var speed, weight;

function setup() {
  createCanvas(800,400);

  speed = random(55, 90);
  weight = random(400, 1500);
  
  car1 = createSprite(50, 200, 10, 10);
  car1.shapeColor = "white";
  car1.debug = true;
  debug.visible = false;

  wall1 = createSprite(400, 200, 40, height / 2);
  wall1.shapeColor = "grey";
  wall1.debug = true;
  debug.visible = false;
  
  
}

function draw() {
  background(0,0,0); 

if (keyDown("space")) {

  car1.velocityX = speed;
  car2.velocityX = speed;
  car3.velocityX = speed;
  car4.velocityX = speed;

}

if (wall1 - car1.x < (car1.width + wall1.width) / 2) {

car1.velocityX = 0;

var deformation = 0.5 * weight * speed * speed / 22509;

if (deformation > 180) {

car1.shapeColor(255, 0, 0);

}

if (deformation < 180 && deformation > 100) {

car1.shapeColor(230, 230, 0);

}

if (deformation < 100) {

  car1.shapeColor(0, 255, 0);

}

}

if (wall2 - car2.x < (car2.width + wall2.width) / 2) {

  car2.velocityX = 0;
  
  var deformation = 0.5 * weight * speed * speed / 22509;
  
  if (deformation > 180) {
  
  car2.shapeColor(255, 0, 0);
  
  }
  
  if (deformation < 180 && deformation > 100) {
  
  car2.shapeColor(230, 230, 0);
  
  }
  
  if (deformation < 100) {
  
    car2.shapeColor(0, 255, 0);
  
  }
  
  }

  if (wall3 - car3.x < (car3.width + wall3.width) / 2) {

    car3.velocityX = 0;
    
    var deformation = 0.5 * weight * speed * speed / 22509;
    
    if (deformation > 180) {
    
    car3.shapeColor(255, 0, 0);
    
    }
    
    if (deformation < 180 && deformation > 100) {
    
    car3.shapeColor(230, 230, 0);
    
    }
    
    if (deformation < 100) {
    
      car3.shapeColor(0, 255, 0);
    
    }
    
    }

    if (wall4 - car4.x < (car4.width + wall4.width) / 2) {

      car4.velocityX = 0;
      
      var deformation = 0.5 * weight * speed * speed / 22509;
      
      if (deformation > 180) {
      
      car4.shapeColor(255, 0, 0);
      
      }
      
      if (deformation < 180 && deformation > 100) {
      
      car4.shapeColor(230, 230, 0);
      
      }
      
      if (deformation < 100) {
      
        car4.shapeColor(0, 255, 0);
      
      }
      
      }
  
  drawSprites();
}