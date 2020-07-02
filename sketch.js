var helicopterIMG, packageIMG , ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
helicopterIMG = loadImage("helicopter.png");
packageIMG = loadImage("package.png");
}

function setup(){
    createCanvas(1200,800)
    rectMode(CENTER);

    var ground_options = {
        isStatic:true
    }
    ground = createSprite(500,700,800,15);
    ground.isStatic = true;
    ground.shapeColor = "white";
    ground.scale = 2;

    helicopter = createSprite(500,200,25,15);
    helicopter.addImage(helicopterIMG);
    helicopter.scale = 1;

    var package_options = {
        restitution : 1
    }

    package = createSprite(530,275,25,15);
    package.addImage(packageIMG);
    package.scale = 0.2;

    }

   

    function draw(){
        rectMode(CENTER)
        background("black")

        drawSprites();     
    }

    function keyPressed(){
        if(keyCode === DOWN_ARROW){
            package.velocityY = +3;
            
           
        }
    }

