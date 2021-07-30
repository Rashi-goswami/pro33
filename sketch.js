const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
function preload(){
  backgroundImg=loadImage("snow2.jpg");
}

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  snow=new Snow(40,0,10,10)

}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);
  snow.display();
 // console.log(snow)
  if(frameCount%100===0){
    snow.push(new Snow(random(this.body.position.x,this.body.position.y,)))
  }
 }
 