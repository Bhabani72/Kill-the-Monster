class superhero {
    constructor(x, y, width, height, angle) {
      var options = { 
        density: 1, 
        frictionAir: 0.0001
      }
  
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image = loadImage("sprites/Superhero1.png");
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
  
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image,0, 0, this.width, this.height);
        pop();
      }
    }
  