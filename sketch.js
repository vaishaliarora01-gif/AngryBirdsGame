const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,ground;
function preload()
{
  bimage= loadImage("sprites/bg.png")
}

function setup()
{
  createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(600,380,1200,40);
  ground1=new Ground(150,305,300,190);
  bird=new Bird(100,100);

  box1=new Box(700,330,70,70);
  box2=new Box(920,330,70,70);
  pig1=new Pig(810,330);
  log1=new Log(810,310,300,PI/2);

  box3=new Box(700,260,70,70);
  box4=new Box(920,260,70,70);
  pig2=new Pig(810,260);
  log2=new Log(810,240,300,PI/2);

  box5=new Box(810,170,70,70);
  log3=new Log(720,200,100,PI/7);
  log4=new Log(900,200,100,-PI/7);

}

function draw()
{
  background(bimage);
  Engine.update(engine);
  ground.display();
  bird.display();
  box1.display();
  box2.display();
  pig1.display();
  log1.display();
  box3.display();
  box4.display();
  pig2.display();
  log2.display();
  box5.display();
  log3.display();
  log4.display();
  ground1.display();
}
