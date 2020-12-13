class BaseClass
{
  constructor(x,y,w,h,angle)
  {
      
    this.body=Bodies.rectangle(x,y,w,h,{restitution:0.7,friction:1.0,density:1.0});
    World.add(world,this.body);
    this.w=w;
    this.h=h;
    this.image=loadImage("sprites/base.png");
     
  }

  display()
  {
  
   var angle=this.body.angle;
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.w,this.h);
    pop();

  }
}

