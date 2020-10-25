class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.6,
            length: 15

        }
      
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
             
        stroke("white")
        strokeWeight(6)
         
      //  if(this.sling.bodyA){
        //    var pointA = this.sling.bodyA.position;
         //   var pointB = this.pointB;
           
       // }
    }
    
}