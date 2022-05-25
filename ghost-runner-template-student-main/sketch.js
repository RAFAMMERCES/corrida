var ghost,ghostImg;
var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;


var END =0;
var PLAY =1;
var gameState = PLAY;



function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  ghostImg = loadAnimation("ghost-jumping.png","ghost-standing.png");
  spookySound = loadSound("spooky.wav");
  climberImg = loadImage("climber.png");
}
 
function setup() {
  createCanvas(600,600);
  spookySound.loop();
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost = createSprite(300,300)
  ghost.addAnimation("biruliru",ghostImg);
  ghost.scale = 0.5;

}


function draw() {
  background(255);
  console.log();
  if (gameState === PLAY) {
    
    if(keyDown("a")){
     ghost.x = ghost.x -4;
     
    }

     if(keyDown("d")){
      ghost.x = ghost.x +4;
    
     
      
    }
    if(keyDown("space")){
      ghost.velocityY = -10;
   
     
      
    }
    
           
  ghost.velocityY = ghost.velocityY + 0.8;
  if(tower.y > 600){
   tower.y = 300;

   if(climber.isTouching(ghost)){
    gameState = END;
  }

  }
   
      //escreva uma condição para a torre de rolagem infinita
    
      spawnDoors();

  
      //escrever um código para fazer o climbersGroup (grupo de escaladores) colidir com o fantasma alterar a velocidade do fantasma  
      
//escreva um código para fazer o invisibleBlockGroup (grupo de bloco invisível) colidir com o fantasma, destruir o fantasma e mudar o estado de jogo para end.
  

}
  if (gameState === END){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }
  drawSprites();

  

}

function spawnDoors()
 {
  //escreva o código aqui para gerar as nuvens
  if (frameCount % 240 === 0) {
    var door = createSprite(200, -50);
    door.addImage(doorImg);
    var climber = createSprite(200,10);
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
  
    climber.addImage(climberImg);
      
    door.velocityY = 1;  
    climber.velocityY = 1;
    invisibleBlock.velocityY = 1;
    door.x = Math.round(random(10,580));
    climber.x = door.x;
    climber.y = door.y +60;
    //mude a profundidade do fantasma e da porta
    
     

    
    //atribuir tempo de vida ao obstacle.lifetime = 300; aqui os obstáculos são as portas, o escalador e o bloco invisível


    //adicione cada obstáculo ao grupo obstaclesGroup.add(obstacle); aqui os obstáculos são as portas, o escalador e o bloco invisível
  }
}

