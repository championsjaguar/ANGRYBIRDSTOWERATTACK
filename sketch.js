const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(2000,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,2400,20);
    platform = new Ground(450, 600, 300, 20);
    platform2 = new Ground(800, 400, 300, 20);

  
    box2 = new Box(340,320,40,40);
    box3 = new Box(380,240,40,40);
    box4 = new Box(420,240,40,40);
    box5 = new Box(460,160,40,40);
    box6 = new Box(500,160,40,40);
    box7 = new Box(540,160,40,40);
    box8 = new Box(580,160,40,40);
    
    box23 = new Box(380,240,40,40);
    box24 = new Box(420,240,40,40);
    box25 = new Box(460,160,40,40);
    box26 = new Box(500,160,40,40);
    box27 = new Box(540,160,40,40);
    box34 = new Box(420,240,40,40);
    box35 = new Box(460,160,40,40);
    box36 = new Box(500,160,40,40);
    box45 = new Box(460,160,40,40);
   
    box12 = new Box(690,320,40,40);
    box13 = new Box(730,240,40,40);
    box14 = new Box(770,240,40,40);
    box16 = new Box(810,160,40,40);
    box17 = new Box(850,160,40,40);
    box18 = new Box(890,160,40,40);
    box19 = new Box(930,160,40,40);
    
    box53 = new Box(730,240,40,40);
    box54 = new Box(770,240,40,40);
    box56 = new Box(810,160,40,40);
    box57 = new Box(850,160,40,40);
    box58 = new Box(890,160,40,40);

    box64 = new Box(770,240,40,40);
    box66 = new Box(810,160,40,40);
    box67 = new Box(850,160,40,40);
    box76 = new Box(810,160,40,40);

    bird = new Bird(100,300);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:100, y:300});
}

function draw(){
    background("black")
    Engine.update(engine);
    //strokeWeight(4);
   
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();

    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();

    box34.display();
    box35.display();
    box36.display();

    box45.display();



    box12.display();
    box13.display();
    box14.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();

    box53.display();
    box54.display();
    box56.display();
    box57.display();
    box58.display();

    box64.display();
    box66.display();
    box67.display();

    box76.display();


    
    ground.display();
    platform.display();
    platform2.display();

  
    bird.display();
    slingshot.display();    
   
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
   }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 ){
        slingshot.attach(bird.body);
        gameState=null;
      
        Matter.Body.setPosition(bird.body,{x:100,y:500})
        
    }
}


