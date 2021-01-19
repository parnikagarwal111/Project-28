
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var tree;
var stone;
var mango1,mango2,mango3,mango4,mango5,mango6;
var launcher;
var boy;

function preload(){
	tree=loadImage("tree.png");
	boy=loadImage("boy.png");
}

function setup() {
	createCanvas(1400,650);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(700,640,1400,20);
	stone=new Stone(240,520);

	mango1= new Mango(1100,400);
	mango2= new Mango(1175,280);
	mango3= new Mango(1175,370);
	mango4= new Mango(1260,260);
	mango5= new Mango(1250,400);
	mango6= new Mango(1300,345);

	launcher= new Launcher(stone.body,{x:240,y:520});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  Engine.update(engine);

  image(tree,1025,200,350,500);
  image(boy,220,480,100,200);

  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  launcher.display();
  
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);

}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	launcher.fly();
}

function detectCollision(object1,object2){

	object1Pos=object1.body.position;
	object2Pos=object2.body.position;

	var distance=dist(object1Pos.x,object1Pos.y,object2Pos.x,object2Pos.y);

	if(distance<=object1.width/2+object2.width/2){
		Matter.Body.setStatic(object2.body,false);
	}
	
}