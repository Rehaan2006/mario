
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var mario;
var obs;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    
	ground=createSprite(200,600,1200,20);
	ground.velocityX=2;
	ground.shapeColor="yellow"
	//Create the Bodies Here.
    mario=createSprite(200,570,50,50);
    mario.shapeColor="red"
	
  
}


function draw() {
 // rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display();
  mario.display()
  
  if(ground.x>600){
	  ground.x=400;
  }
  SpwanObstacle();
 drawSprites();
}
function SpwanObstacle(){
	if(frameCount%100===0){
	obs=createSprite(800,580,30,30);
	obs.shapeColor="brown"
	obs.velocityX=-2;
	obs.lifetime=400;
	}
}


