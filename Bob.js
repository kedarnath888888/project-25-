class Ball{ 
    constructor(x,y,radius){
        var options ={
            'isStatic':true,
            'restitution':0.3,
            'friction':0.5,
            'density':1.5
        }
       this.body=Bodies.circle(x,y,70,options);
       this.radius=70;
       World.add(world,this.body); 
    }
    display(){
    var  pos =this.body.position;
    push();
     translate(pos.x, pos.y); 
     ellipseMode(CENTER);
     fill(0,0,255);
     ellipse (pos.x, pos.y, 70); 
     

    pop();

 }
}