var cat,mouse,catImg1,catImg2,mouseImg1,mouseImg2,bgImg,catImg3,mouseImg3;



function preload() {
    //load the images here
  bgImg=loadImage("images/garden.png");
  catImg1=loadAnimation("images/cat1.png");
  catImg2=loadAnimation("images/cat2.png","images/cat3.png");
  catImg3=loadAnimation("images/cat4.png");
  mouseImg1=loadAnimation("images/mouse1.png");
  mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
  mouseImg3=loadAnimation("images/mouse4.png");
}


function setup(){
   createCanvas(1000,800);
  
   //create tom and jerry sprites here
   mouse=createSprite(200,600,50,50);
   mouse.addAnimation("mouse",mouseImg1);
   mouse.scale=0.25;

   cat=createSprite(870,600,50,50);
   cat.addAnimation("cat",catImg1);
   cat.scale=0.25;     
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.addAnimation("catRunning",catImg3);
        cat.changeAnimation("catRunning");
        cat.velocityX=0;
        cat.x=300;
        cat.scale=0.25;
        mouse.addAnimation("mouseRunning",mouseImg3);
        mouse.scale=0.25;
        mouse.changeAnimation("mouse");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
     cat.velocityX=-5;
     cat.addAnimation("cat",catImg2);
     cat.changeAnimation("catImg");
      mouse.addAnimation("mouseTeasing",mouseImg2);
      mouse.changeAnimaion("mouseTeasing");
      mouse.frameDelay=25;
  }

}
