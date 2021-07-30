class Snow{
    constructor(x,y){
        var options = {

        }
        this.image=loadImage("snow4.webp")
        this.r =10;
        this.x=x;
        this.y=y;
        this.body = Bodies.circle(x, y, this.r, options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
       
        translate(pos.x, pos.y);
         imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,40,40);

    }
    
}