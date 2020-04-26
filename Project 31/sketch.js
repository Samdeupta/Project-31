const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var box1,box2,box3,box4,box5;
var box6,box7,box8,box9;
var box10,box11,box12;

var backgroundImg,platform;
var bird, slingShot;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,400,1200,20);
   
    box1 = new Box(940,377.5);
    box2 = new Box(970,377.5);
    box3 = new Box(1000,377.5);
    box4 = new Box(1030,377.5);
    box5 = new Box(1060,377.5);

    box6 = new Box(952,332.5);
    box7 = new Box(992,332.5);
    box8 = new Box(1012,332.5);
    box9 = new Box(1042,332.5);

    box10 = new Box(970,287.5);
    box11 = new Box(1010,287.5);
    box12 = new Box(1022,287.5);
   
    bird = new Bird(300,300);

    slingShot = new SlingShot(bird.body,{x:300,y:300});
}

function draw(){
    background("black");
    Engine.update(engine);
    stroke("black")
    strokeWeight(1);

    ground.display();
    bird.display();
    slingShot.display();    

    

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    box6.display();
    box7.display();
    box8.display();
    box9.display();

    box10.display();
    box11.display();
    box12.display();
    
    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}
