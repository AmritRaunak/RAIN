const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var world;
var engine;
var drop=[];
var thunder, t1,t2,t3,t4;
var thunderCreatedFrame=0;
function preload(){
    t1=loadImage("thunderbolt/1.png")
    t2=loadImage("thunderbolt/2.png")
    t3=loadImage("thunderbolt/3.png")
    t4=loadImage("thunderbolt/4.png")
}

function setup(){
   createCanvas(400, 600);
   engine=Engine.create();
   world=engine.world;

   for(var i=0;i<100;i++) {
       drop.push(new Drops(random(0,400),random(0,400)))
   }

}

function draw(){
    background("black");
    Engine.update(engine);
    
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(t1);
            break;
            case 2: thunder.addImage(t2);
            break; 
            case 3: thunder.addImage(t3);
            break;
            case 4: thunder.addImage(t4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    for(var i=0;i<100;i++) {
        drop[i].display();
        drop[i].updateY();
    }
}   

