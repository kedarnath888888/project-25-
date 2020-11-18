
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roofObj;
var bob1;
var rope;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 roofObj = new Roof(400,100,500,50);
 bob1 = new Ball(450,300,70);

 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  roofObj.display();
  bob1.display();
  
  drawSprites();
 
}



