class Bird extends BaseClass {
  constructor(x,y){
    var options={
      'density':500.0
    }
    super(x,y,50,50,options);
    this.image = loadImage("sprites/bird.png");
    this.smokeImg = loadImage("sprites/smoke.png");
    this.trajectory = [];
  }

  display() {
   super.display();

   if(this.body.velocity.x > 10 && this.body.position.x > 100){
    var position = [this.body.position.x,this.body.position.y];
    this.trajectory.push(position);
    }

    for(var i=0; i < this.trajectory.length; i++){
      image(this.smokeImg,this.trajectory [i] [0],this.trajectory [i] [1]);
    }
  }
}
