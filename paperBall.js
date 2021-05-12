class Paper{
    constructor(x,y,Radius){
    var option ={
        isStatic:false,
      restitution:0.3,
      friction:1.0,
       density:0.4
    }
    this.body=Bodies.circle(x,y,Radius,option);
    this.Radius=Radius;
    this.image=loadImage("paperball.jpeg")
      World.add(world,this.body);
    }
    display(){
        var pos=this.body.position
        //add.Image(paperball.jpeg);
        push()
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.Radius,this.Radius);
        pop()
    }
    
    }