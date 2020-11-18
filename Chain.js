class Chain {
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options ={
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX,y:this.offsetY}
    
    
        }
         this.chain=Constraint.create(options); 
        World.add(world,this.chain);
    

    }
    display(){
        var posA = this.chain.bodyA.position;
        var posB = this.chain.bodyB.position;
        line (posA.x,posA.y,posB.x,posB.y);
    }
}