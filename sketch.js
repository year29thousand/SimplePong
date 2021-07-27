//create text for controls...
let OurText;
let description;
let P2Description;



//This pong game is 2 player

let P1 = [40, 175, 0];
let P2 = [550, 175, 0]; //but it also can be single player
let AI = [550, 175, 0];
let BallCoords = [300,175];
let BallVelocityX;
let BallVelocityY;
let BallDiameter = 10;
let Winner;


let TwoPlayerActive = false;
let GameStage = 0; // Zero means that we're at the starting screen
function setup() {
  createCanvas(600, 350);
  BallVelocityX = random(-5, 5);
  BallVelocityY = random(-5,5);
  Ourtext = createElement('H1', "SIMPLE PONG CONTROLS:");
  Ourtext.position(650, 40);
  description = createElement( 'H3', "P1: W = up, S = down");
  description.position(650, 100);
  P2Description = createElement('H3', "P2: Down and Up Arrows");
  P2Description.position(650, 130);
 
  
}



function draw() {
  
  if(GameStage == 0) {
     
     Starting();
     
     }
  if(GameStage == 1) {
     
    if(TwoPlayerActive == false) {
      Play();
      
    }else if(TwoPlayerActive == true) {
               PlayTwoPlayer();
             
             }
      
     
     }
  if(GameStage == 2) {
    YouLose();
    
  }
  if(GameStage == 3) {
       YouWin();
     }
}

