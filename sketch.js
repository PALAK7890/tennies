var backgroundImg;
var player1 , player2;
var ball;
var player1Img , player2Img;
var ballImg;

function preload(){

player1Img=loadImage ("../assests/boy.png");
player2Img=loadImage("../assests/girl.png");
backgroundImg=loadImage("../assests/bg.jpg");
ballImg=loadImage("../assests/ball.jpg");



}

function setup(){     
  createCanvas(windowWidth-20,windowHeight-30);
  
  player1 = createSprite(20,windowHeight/2);
  //add img to player1
  player1.addImage("player1", player1Img);


  player2  = createSprite(windowWidth-50,windowHeight/2);
  // add img to player2
  player2.addImage("player2", player2Img);


  ball = createSprite(windowWidth/2,windowHeight/2,30,30);
  //add img to ball
  ball.addImage("ball", ballImg);

}

function draw(){
  background (backgroundImg);

  drawSprites ();


}

