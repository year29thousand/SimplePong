let Starting = function () {
  background(255);
  textSize(40);
  fill(0);
  text("Simple Pong!", width * 0.3, height * 0.52);
  textSize(17);
  text(
    "Click BACKSPACE = single-player, Click ENTER = local 2 player",
    width * 0.07,
    height - 20
  );
  if (keyIsPressed && keyCode == 8) {
    GameStage = 1;
  }
  if (keyIsPressed && keyCode == 13) {
    GameStage = 1;
    TwoPlayerActive = true;
  }
};

let Play = function () {
  fill(0);
  background(255);
  ellipse(BallCoords[0], BallCoords[1], BallDiameter, BallDiameter);
  BallCoords[0] += BallVelocityX;
  BallCoords[1] += BallVelocityY;
  if(BallCoords[1] < 0) {
       BallVelocityY = BallVelocityY * -1;
        BallCoords[1] = 10;
     
     }
  if(BallCoords[1] > height) {
       BallVelocityY =  BallVelocityY * -1;
      BallCoords[1] = height-10;
     
     }
  rect(AI[0], AI[1], 10, 50);
  fill(0, 255, 0);
  rect(P1[0], P1[1], 10, 50);
  textSize(40);
  text("Points: " + P1[2],  10, 50);
  
  if(BallCoords[0] - BallDiameter <= P1[0] + 10 && BallCoords[1] >= P1[1] && BallCoords[1] <= P1[1] + 50 && BallCoords[0] >= P1[0]) {
       BallCoords[0] = P1[0] + BallDiameter + 10 + 5;
      BallVelocityX = BallVelocityX * -1;
      P1[2] += 1;
      BallVelocityX += 0.2;
     }
  if(BallCoords[0] + BallDiameter >= AI[0] - 10 && BallCoords[1] >= AI[1] && BallCoords[1] <= AI[1] + 50 && BallCoords[0] <= AI[0] + 10) {
       BallCoords[0] = AI[0] - BallDiameter - 10 - 5;
      BallVelocityX = BallVelocityX * -1;
      BallVelocityX -= 0.2;
     }
  AI[1] = BallCoords[1] - 25;
  if(keyIsPressed && keyCode == 87) {
       P1[1] -= 5;
     }
  if(keyIsPressed && keyCode == 83) {
    P1[1] += 5;
  }
  
  if(BallCoords[0] < 0) {
       GameStage = 2;
     }

  
};

let PlayTwoPlayer = function () {
  fill(0);
  background(255);
  ellipse(BallCoords[0], BallCoords[1], BallDiameter, BallDiameter);
  rect(P1[0], P1[1], 10, 50);
  rect(P2[0], P2[1], 10, 50);
  if(BallCoords[0] - BallDiameter <= P1[0] + 10 && BallCoords[1] >= P1[1] && BallCoords[1] <= P1[1] + 50 && BallCoords[0] >= P1[0]) {
       BallCoords[0] = P1[0] + BallDiameter + 10 + 5;
      BallVelocityX = BallVelocityX * -1;
      P1[2] += 1;
      BallVelocityX += 0.2;
     }
  if(BallCoords[1] < 0) {
       BallVelocityY = BallVelocityY * -1;
        BallCoords[1] = 10;
     
     }
  if(BallCoords[1] > height) {
       BallVelocityY =  BallVelocityY * -1;
      BallCoords[1] = height-10;
     
     }
  if(BallCoords[0] + BallDiameter >= P2[0] - 10 && BallCoords[1] >= P2[1] && BallCoords[1] <= P2[1] + 50 && BallCoords[0] <= P2[0] + 10) {
       BallCoords[0] = P2[0] - BallDiameter - 10 - 5;
      BallVelocityX = BallVelocityX * -1;
      BallVelocityX -= 0.2;
      P2[2] += 1;
     }
  
  if(BallCoords[0] < 0) {
       GameStage = 3;
        Winner = 2;
     }
  else if(BallCoords[0] > width) {
            GameStage = 3;
            Winner = 1;
          }
  BallCoords[0] += BallVelocityX;
  BallCoords[1] += BallVelocityY;
  
  if(keyIsPressed && keyCode == 87) {
       P1[1] -= 5;
     }
  if(keyIsPressed && keyCode == 83) {
    P1[1] += 5;
  }
  
  if(keyIsPressed && keyCode == 38) {
       P2[1] -= 5;
     }
  if(keyIsPressed && keyCode == 40) {
       P2[1] += 5;
     }
  
};

let YouLose = function () {
  background(255);
  textSize(60);
  fill(255,0,0);
  text("You Died, Points:" + P1[2], 50 , 200 );
};

let YouWin = function () {
  background(255);
  textSize(60);
  fill(0);
  let TextCoords = [100, 260];

  if (Winner == 1) {
    text("Player 1 Wins!", TextCoords[0], TextCoords[1]);
  }
  if (Winner == 2) {
    text("Player 2 Wins!", TextCoords[0], TextCoords[1]);
  }
};

