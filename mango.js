class Mango {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      
      this.body = Bodies.rectangle(x,y,40,40,options);
      this.width = 40;
      this.height = 40;
      this.image=loadImage("mango.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      imageMode(CENTER);
      fill("brown");
      image(this.image,0,0, this.width, this.height);
      pop();    }
  };
  