const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var rope1,rope2,rope3,rope4,rope5;
var bobObj1,bobObj2,bobObj3,bobObj4,bobObj5;
var roof;

var checkerObj;

var bigNumber,firstNumber,secondNumber;

function setup(){
  createCanvas(displayWidth,displayHeight);
  engine = Engine.create();
  world = engine.world;

  checkerObj = new Checker();

  roof = new Roof();

	bobObj1 = new Bob(300,350);
	bobObj2 = new Bob(350,350);
	bobObj3 = new Bob(400,350);
  bobObj4 = new Bob(450,350);
	bobObj5 = new Bob(500,350);

	rope1 = new Rope(bobObj1.body,{x:width/2-200,y:150});
	rope2 = new Rope(bobObj2.body,{x:width/2-100,y:150});
	rope3 = new Rope(bobObj3.body,{x:width/2,y:150});
	rope4 = new Rope(bobObj4.body,{x:width/2+100,y:150});
  rope5 = new Rope(bobObj5.body,{x:width/2+200,y:150});
}

function draw() {
  background(255,255,255);
  Engine.update(engine);

  checkerObj.display();

  roof.display();

	bobObj1.display();
	bobObj2.display();
	bobObj3.display();
	bobObj4.display();
	bobObj5.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
  rope5.display();
}