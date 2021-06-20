class Drops{
constructor(x,y){
   //super(x,y,50,50)
    var options= {

    restitution:0.8,
    friction:1.0,
    density:1.0

}
//this.image()

this.drops= Bodies.circle(x,y,5,options)
this.radius=5;
World.add(world,this.drops)
}


updateY(){

    if(this.drops.position.y>height){
        Matter.Body.setPosition(this.drops,{x:random(0,400),y:random(0,400)})
    }
}

showDrop(){
    fill("blue")
    ellipseMode(CENTER);
    ellipse(this.drops.position.x,this.drops.position.y,this.radius,this.radius);
 
}
}