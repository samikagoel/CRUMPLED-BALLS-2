
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinimg = loadImage("images/dustbingreen.png");
	paperimg=loadImage("images/paper.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	paperball = new Paper(50, 670);
	dustbin1 = new Dustbin(600, 650, 10, 50);
	dustbin2 = new Dustbin(545, 670, 100, 10);
	dustbin3 = new Dustbin(500, 650, 10, 50);
	ground = new Ground(400, 680, 800, 10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
 image(dustbinimg,490,530,120,150)
 paperball.display();

}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperball.body, paperball.body.position, {x:50, y:-60});
	}
}


