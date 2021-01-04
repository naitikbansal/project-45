var form,player,game;
var database;
var gameState=0;
var playerCount=0;
var fish,fishImg1,fishImg2,fishImg3,fishImg4;

function preload(){
//fishImg1=loadImage("golden project template/level1/Fish 1.png");
//fishImg2=loadImage("level1/Fish 2.png");
//fishImg3=loadImage("level1/Fish 3.png");
//fishImg4=loadImage("level1/Fish 4.png");
}
function setup(){
  createCanvas(400,400);
  // database=firebase.database();
  // game=new Game();
  // game.getState();
  // game.start();
}

function draw(){
  background("red");
  if(gameState==0){
gameStart();

  }
}


function level1(){
  
    fish=createSprite(50,50,100,100);
    //fish.addImage()
    level1Obstacles();
  

 }
function level1Obstacles(){
obstacle1=createSprite(300,300,20,20);
}

function gameStart(){
  background("orange");
  textSize(35);
  textFont("Comic Sans MS");
  fill("blue");
  text("HUNT FOR THE PREY",20,200);
  textSize(20);
  fill("");
  text("NAITIK WELCOMES YOU TO",50,100);
  textSize(35);
  text("🍴🔪",150,300);
  var button=createButton('play');
  button.position(160,350);
}




