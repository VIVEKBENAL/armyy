var helicopterIMG, helicopterSprite, packageSprite,packageIMG,groundIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
    groundIMG=loadImage("ground1.png")

}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(10, 80, 10,10);
	packageSprite.velocityX=5
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	

	helicopterSprite=createSprite(10, 200, 10,10);
	helicopterSprite.velocityX=4
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor=color(255)
    groundSprite.addImage(groundIMG)
	groundSprite.scale=3
	groundSprite.depth=-2

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= helicopterSprite.x

  packageSprite.y= packageBody.position.y 
  drawSprites();
 
  


if (helicopterSprite.x>400) {

helicopterSprite.velocityX=0


}














}

function keyPressed() {
	if (keyCode === DOWN_ARROW && helicopterSprite.x>400) {
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	  Matter.Body.setStatic(packageBody,false) 
	  
	  
	   
	 }
   
   
}














