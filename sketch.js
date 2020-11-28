var car;
var wall;
var weight;
var speed;
var deformation;

function setup() {
  createCanvas(800,400);
 car = createSprite(100, 200, 50, 50);
 wall = createSprite(700,200,100,400);
}

function draw() {
  background(0); 
  speed=random(55,90);
  weight=random(400,1500);
  car.velocityX=speed;

  deformation=(0.5*weight*speed*speed)/22500

  if(deformation>100){
    car.shapeColor="green";
  }
 
  if(deformation<=100&&deformation>180){
    car.shapeColor="yellow";
  }

  if(deformation>=180){
    car.shapeColor="red";
  }

  car.collide(wall);

  drawSprites();
}

function isTouching(obj1,obj2){
  if(obj1.x-obj2.x<=obj1.width/2+obj2.width/2&&obj2.x-obj1.x<=obj1.width/2+obj2.width/2&&
    obj1.y-obj2.y<=obj1.height/2+obj2.height/2&&obj2.y-obj1.y<=obj1.height/2+obj2.height/2){
      return true ;
    }
    else{
      return false;
    }
}