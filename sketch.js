var sword,swordImg
var apple,appleImg
var orange,orangeImg
var stopper,stopperImg
var gameover,gameoverImg
var road,roadImg
var man,manImg
var Play = 1;
var End = 0;
var gamestate = 1;
var treasureCollection = 0;

function preload(){

swordImg = loadImage("sword.png");
appleImg = loadImage("apple.png");
orangeImg = loadImage("orange.png");
stopperImg = loadImage("stopper.png");
gameoverImg = loadImage("gameover.png");
roadImg = loadImage("Road.png");
manImg = loadImage("Runner-1.png","Runner-2.png");
}

function setup() {
 
createCanvas(400,600);

road = createSprite(200,200);
road.addImage(roadImg);
road.velocityY = 4;



man = createSprite(70,580,20,20);
man.addAnimation("Ashokrunning", manImg);
man.scale = 0.07;

appleG=new Group();
orangeG=new Group();
stopperG=new Group();
swordGroup=new Group();



}

function draw() {

if (gamestate===Play) {
    background(0);
    man.x=World.mouseX;

    edges= createEdgeSprites();
    man.collide(edges);
    
    if(road.y > 400 ){
      road.y = height/2;
    }

    createapple();
    createorange();
    createstopper();
    createsword();

    if (appleG.isTouching(man)) {
      appleG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (orangeG.isTouching(man)) {
     orangeG.destroyEach();
      treasureCollection=treasureCollection+100;
    }
    else if(stopperG.isTouching(man)) {
        stopperG.destroyEach();
        treasureCollection = treasureCollection - 50; 
}
else if(swordGroup.isTouching(man)) {
      gameState=END;
      appleG.destroyEach();
      orangeG.destroyEach();
      stopperG.destroyEach();
      swordGroup.destroyEach();
     
      appleG.setVelocityYEach(0);
      orangeG.setVelocityYEach(0);
      stopperG.setVelocityYEach(0);
      swordGroup.setVelocityYEach(0);
}

drawSprites();
  textSize(20);
  fill(255);
  text("Treasure:" + treasureCollection,10,30);
  }

 

}

  function createapple() {
    if (World.frameCount % 60 == 0) {
    var  apple = createSprite(Math.round(random(50, 350),40, 10, 10));
    apple.addImage(appleImg);
    apple.scale=0.15;
     apple.velocityY = 3;
     apple.lifetime = 150;
     appleG.add(apple);
    }
  }


  function createorange() {
    if (World.frameCount % 100 == 0) {
    var orange = createSprite(Math.round(random(50, 350),40, 10, 10));
    orange .addImage(orangeImg);
    orange .scale= 0.15;
    orange .velocityY = 3;
    orange .lifetime = 150;
    orangeG.add(orange);
  }
  }

  function createstopper() {
    if (World.frameCount % 140 == 0) {
    var stopper = createSprite(Math.round(random(50, 350),40, 10, 10));
    stopper.addImage(stopperImg);
    stopper.scale=0.15;
    stopper.velocityY = 3;
    stopper.lifetime = 150;
    stopperG.add(stopper);
    }
  }

  function createsword(){
    if (World.frameCount % 180 == 0) {
    var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
    sword.addImage(swordImg);
    sword.scale=0.15;
    sword.velocityY = 3;
    sword.lifetime = 150;
    swordGroup.add(sword);
    }
  }