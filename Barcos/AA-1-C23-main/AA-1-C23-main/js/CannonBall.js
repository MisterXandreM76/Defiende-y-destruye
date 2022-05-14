class CannonBall {
  constructor(x,y){
    var options={
        isStatic:true
    }
    this.r=30;//E tamaño de la bala
    this.body=Bodies.circle(x,y,this.r,options)
        this.cannonBall=loadImage("assets/cannonball.png")
        this.PuntosBlancos=[]
        World.add(world,this.body)
    }

    Killer(){//Funcion
        var NewAngle=canon1.a-25
        NewAngle=NewAngle*(3.14/180)//Para la trayectoria de los puntos
        var Velocity=p5.Vector.fromAngle(NewAngle)
        Velocity.mult(0.5)
        Matter.Body.setStatic(this.body,false)//La bala se queda estatica para que no se caiga
        Matter.Body.setVelocity(this.body,{x:Velocity.x*(180/3.14),y:Velocity.y*(180/3.14)}) //La bala se mueve
    }

    deploy(){
        push();
        imageMode(CENTER);
        image(this.cannonBall,this.body.position.x,this.body.position.y,this.r,this.r);
        pop();

        var AMD=[this.body.position.x,this.body.position.y]//Martis
        this.PuntosBlancos.push(AMD)//Trayectoria 

        for(var i=0; i<this.PuntosBlancos.length;i++){
        image(this.cannonBall,this.PuntosBlancos[i][0],this.PuntosBlancos[i][1],5,5)//Creación de puntos


        }
    }
}
 