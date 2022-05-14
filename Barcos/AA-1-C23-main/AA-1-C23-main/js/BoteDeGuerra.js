class BoteDeGuerra{//Plantila
 constructor(x,y,w,h,p){
 
this.w=200
this.h=200
this.p=p
this.body=Bodies.rectangle(x,y,this.w,this.h)
     this.BoteDeGuerra=loadImage("assets/boat/boat.png")
     World.add(world,this.body)
  }
remove(index){  
  setTimeout(()=>{ //de la 12 A 14 el bbote se destruye
  Matter.World.remove(world,Botes[index].body);
    delete Botes[index]
  },100)
 }

  show(){// 18: demuestra a el barco
   push();// 19: darle un empujon para que se cargue la imagen 
   imageMode(CENTER);
   image(this.BoteDeGuerra,this.body.position.x,this.body.position.y,this.w,this.h)
   pop();// 22: remover la imagen
}
}