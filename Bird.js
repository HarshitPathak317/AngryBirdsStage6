class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image2 = loadImage("sprites/smoke.png");
    this.trg = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    
    super.display();
    if(this.body.velocity.x>10 && this.body.position.x>200){
    var pos = [this.body.position.x,this.body.position.y];
    this.trg.push(pos);
    }
    for(var i = 0; i<this.trg.length;i++)
    {
      image(this.image2,this.trg[i][0],this.trg[i][1]);
    }
  }
}
