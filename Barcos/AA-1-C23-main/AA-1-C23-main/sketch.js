const Engine = Matter.Engine;//Estamos importando del motar
const World = Matter.World;//Importamos la Biblioteca del mundo
const Bodies = Matter.Bodies;//Importamos los bodyes
const Constraint = Matter.Constraint;


var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon;
var cannonBall;
var canon1
var balls=[];//Estas son las matrisesd
var Botes=[];//Estas son las matrisesd
var AnimacionDeBote=[];//Estas son las matrisesd
var DatosSpriteBote
var EstiloSpriteBote


function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  //towerImage = loadImage("./assets/tower.png");
 // DatosSpriteBote=loadJSON("./assets/boat/boat.json")
  //EstiloSpriteBote=loadImage(".asset/boat/boat.png")
}
function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES)
  angle = 15
  //tower=Bodies.rectangle(160,350,160,310,{isStatic:true})
  //World.add(world,tower)
  //image(towerImage,160,350,160,310, {isStatic: true})
  
  canon1=new Cannon(180,110,160,100,angle)
  var floor = Bodies.rectangle(0,height-1,width*2,1,{isStatic:true})
  World.add(world,floor)
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);//Acatualisamos el motor

  

  canon1.deploy();

  for(var i=0; i<balls.length; i++){//Con este siclo se recorre la matriz de las balas
    showbulletCanon(balls[i],i)
    MunicionExplosiva(i);
  }
MagicBottle();

}
function MunicionExplosiva(index){//En resumen, los botes explotan :)
  for(var i=0; i<Botes.length; i++){
   if(balls[index] !==undefined && Botes[i] !==undefined){

   var colicionChida = Matter.SAT.collides(balls[index].body,Botes[i].body)
   if(colicionChida.collided){
     Botes[i].remove(i)
     Matter.World.remove(world,balls[index].body)
     delete balls[index]


   }
   } 
  }

  
}

function keyPressed(){//Esto es para dispara la bala
  if(keyCode===DOWN_ARROW){
    console.log("se presiona la tecla asia abajo")
    var bulletCanon
    bulletCanon=new CannonBall(canon1.x,canon1.y)
    bulletCanon.PuntosBlancos=[]
    console.log("Se genero la bala")

    balls.push(bulletCanon)
  }
}

function keyReleased(){
if (keyCode===DOWN_ARROW){
balls[balls.length-1].Killer();


}

}

function showbulletCanon(ball,index){//Se ven las balas
  if(ball){
    ball.deploy();
  }
}

function MagicBottle(){ //creamos botes
  if (Botes.length > 0) {
    if (
      Botes[Botes.length - 1] === undefined ||
      Botes[Botes.length - 1].body.position.x < width - 300
    ) {
    var posisiones=[-20,-40,-60,-70] //Para determiar donde irian los botes
    var RandomPosition=random(posisiones)
    var boat=new BoteDeGuerra(width,height-100,150,150,RandomPosition);
    Botes.push(boat)
    }

    for(var i=0; i<Botes.length; i++){//Matris de recorensia de botes
      if(Botes[i]){
        Matter.Body.setVelocity(Botes[i].body,{x:-1,y:0});//Es la velosidad de los botes
        Botes[i].show();
      }//Fin if
     else {
        Botes[i];
      }
    }
  } else {
    var boat=new BoteDeGuerra(width,height-100,150,150,RandomPosition);//Determinar el ancho,alto y posicion del bote
    Botes.push(boat)
  }
}// Fin funcions MagicBottle




  