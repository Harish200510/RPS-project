  const scoreBoard=JSON.parse(localStorage.getItem('score'));
      
      upadateScore();

      function playgame(playerMove) {
        const machinemove = pickcomputermove();
        let result = "";

        if (playerMove === "Scissors") {
          if (machinemove === "Scissors") {
            result = "Tie";
          } else if (machinemove == "Rock") {
            result = "You lose";
          } else if (machinemove === "Paper") {
            result = "You win";
          }
        } else if (playerMove === "Paper") {
          if (machinemove === "Paper") {
            result = "Tie";
          } else if (machinemove === "Scissors") {
            result = "You lose";
          } else if (machinemove == "Rock") {
            result = "You win";
          }
        } else if (playerMove === "Rock") {
          if (machinemove === "Rock") {
            result = "Tie";
          } else if (machinemove === "Paper") {
            result = "You lose";
          } else if (machinemove === "Scissors") {
            result = "You win";
          }
        }

        if (result === "You win") {
          scoreBoard.win += 1;
        } else if (result === "You lose") {
          scoreBoard.Lose += 1;
        } else if (result === "Tie") {
          scoreBoard.Tie += 1;
        }
        
        localStorage.setItem('score',JSON.stringify(scoreBoard))
        
        upadateScore();
      
          document.querySelector('.js-result').innerHTML=result;
          document.querySelector('.js-moves').innerHTML=`You <img src="${playerMove}-emoji.png" class="icon">
      <img src="${machinemove}-emoji.png" class="icon"> Computer`;
       
        /*alert(
          `You picked ${playerMove},Computer picked ${machinemove},${result}\nWin:${scoreBoard.win}, Loses:${scoreBoard.Lose}, Tie:${scoreBoard.Tie}
          `
        );*/
      }

     function upadateScore(){

        document.querySelector('.js-score')
          .innerHTML=`Win:${scoreBoard.win},
             Loses:${scoreBoard.Lose}, 
                Tie:${scoreBoard.Tie}`;
      }

      function reset() {
        scoreBoard.Lose = 0;
        scoreBoard.Tie = 0;
        scoreBoard.win = 0;
      }
      function pickcomputermove() {
        const num = Math.random();
        let computerMove = "";

        if (num >= 0 && num < 1 / 3) {
          computerMove = "Rock";
        } else if (num >= 1 / 3 && num < 2 / 3) {
          computerMove = "Paper";
        } else if (num >= 2 / 3 && num < 1) {
          computerMove = "Scissors";
        }
        return computerMove; // it ends the functions are if you want to return anything just return here
      }