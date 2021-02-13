// this is my project for the make my own game
// anyone who is looking at my code in the future just want to let you know that i put a lot of work into whateever the finished outcome of this is
// if you see mistakes, everyone makes mistakes
// life is just a bunch of mistakes, just remember that the next time you make a mistake
// etc etc let's get on with the code


var bg, bgImg;
var player, playerAnimation;

var thief, thiefImg;
var coin, coinAnimation;
var homeless, homelessImg;


function preload()
{

  playerAnimation = loadAnimation("walkingImg1.png", "walkingImg2.png", "walkingImg3.png", "walkingImg4.png", "walkingImg5.png", "walkingImg6.png", "walkingImg7.png", "walkingImg8.png");
  bgImg = loadImage("bg2.png");

}


function setup() {
  createCanvas(1000,600);

  //creating the background
  bg = createSprite(500,300, displayWidth, displayHeight);
  bg.addImage(bgImg);
  bg.scale = 2;

  //making the player Animation
  player = createSprite (100,500, 20,20);
  player.addAnimation("movingPlayer",playerAnimation);

}


function draw() {
  background("black");
  
  // making the background move infinitely
  bg.velocityX = -2;

  if (bg.x < 0 )
  {
    bg.x = 300;
  }

  //giving the user controll over the player
  //maing the jump controlls
  
  //giving the player gravity
  player.velocityY = 10;
  player.velocityY = 3
  
  if (keyDown(UP_ARROW))
  {
    player.y = player.y-50
    console.log("jump");
  }

  //making the player move to the left
  if (keyDown(LEFT_ARROW))
  {
    console.log("left");
  }

  //making the player move to the right
  if(keyDown(RIGHT_ARROW))
  {
    console.log("right");
  }





  
  drawSprites();
}