class Cannon {
  constructor(x,y,w,h,a){
      this.x=x;
      this.y=y;
      this.w=w;
      this.h=h;
      this.a=a;

    this.canonImagen=loadImage("assets/canon.png");
    this.cannonBaseImagen=loadImage("assets/cannonBase.png");
    this.towerImage=loadImage("assets/tower.png")
 }

 deploy(){
    if(keyIsDown(RIGHT_ARROW)&& this.a<70){// Esto fue para que el cañon no diera vueltas a lo loco (Y de paso moverlo)
      this.a+=1;
    }
  if(keyIsDown(LEFT_ARROW)&& this.a>-30){// Esto fue para que el cañon no diera vueltas a lo loco (Y de paso moverlo)
    this.a-=1;
  }
 
 push();
 translate(this.x,this.y);
 rotate(this.a);
 imageMode(CENTER);
 image(this.canonImagen,0,0,this.w,this.h);
 pop();
 image(this.towerImage,70,190,190,350)
 image(this.cannonBaseImagen,70,20,250,200);


}

}
