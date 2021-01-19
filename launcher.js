class Launcher{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness:0.004,
            length:5
        }

        this.pointB=pointB;
        this.bodyA=bodyA;
        this.constraint=Constraint.create(options);
        World.add(world, this.constraint);
    }

    fly(){
        this.constraint.bodyA= null;
    }

    display(){
        if(this.constraint.bodyA){
            var pointA=this.constraint.bodyA.position;
            var pointB=this.pointB;

            push();
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            pop();
        }
    }
}