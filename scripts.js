        var winCount=0;
        var lossCount=0;
        var tieCount=0;
        var userGuess;
        var computerChoices;
        var loseText;
        var winText;
        var tieText;
        var recapText;
        var computerGuess;
        var userGuessText;
        var compGuessText;
        var winStatus;
        var winStreak=0;
        var longWinStreak=0;
        var loseStreak=0;
        var longLoseStreak=0;

    function gameStart(event) {
        var computerChoices = ["r", "p", "s"];
        var loseText = ["You lose!", "Ha! You lost to a robot!", "Come on, man! You lost again!", "Just because you lose a lot doesn't make you a loser."];
        var winText = ["You win!!", "Oh yeah buddy! You won!", "Show that robot who's boss!"];
        var tieText = ["It's a tie!", "You and the robot share a brain. You tied.", "You must be part robot. You tied again.", "Are you and the robot related??", "You tied. Don't feel bad. On any given roll, there is a 33% chance that you are a robot."];
        var badKeyText = ["Bad key pressed. Try again", "Seriously there are only three keys that work.", "This game is not that hard. Try 'p', 's', or 'r'"]
        
        userGuess = event.key;

      if ((userGuess!=="r") && (userGuess!=="p") && (userGuess!=="s")) {
        resultText = badKeyText[Math.floor(Math.random() * badKeyText.length)];
        elm("recap").innerHTML="No, no, no. r, p, s only.";
        elm("smartText").innerHTML=resultText;
        return ;
      }

        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      //translate the guesses into english

      if (computerGuess==="s") {
            compGuessText="scissors.";
            elm("robotPic").src="./scissors-sm.png";
        }
        else if (computerGuess==="p") {
            compGuessText="paper.";
            elm("robotPic").src="./paper-sm.png";
        }
        else {
            compGuessText="rock.";
            elm("robotPic").src="./rock-sm.png";
        }

      if (userGuess==="s") {
        userGuessText="scissors.";
        elm("userPic").src="./scissors-sm.png";
        }
        else if (userGuess==="p") {
            userGuessText="paper.";
            elm("userPic").src="./paper-sm.png";
        }
        else {
            userGuessText="rock.";
            elm("userPic").src="./rock-sm.png/";
        }

    



      console.log("compguess " + compGuessText);
      console.log("userguess " + userGuessText);

      var winStatus = isWin(userGuess,computerGuess)
      console.log("winStatus is set: " + winStatus)
    if (winStatus==="Tie") {
        elm("winLosePic").src = "./handshake.png";
    }
    if (winStatus === "Win") {
        elm("winLosePic").src = "./youwin.png";
        var resultText=winText[Math.floor(Math.random() * winText.length)];
        winStreak++;
        if (longLoseStreak===0) {
            longLoseStreak = 1;
        }
        if (loseStreak > longLoseStreak) {
            longLoseStreak = loseStreak;
        }
        if (winStreak > longWinStreak) {
            longWinStreak = winStreak;
        }
        winCount++; loseStreak=0;     
        updateAll(userGuessText,compGuessText,resultText,winStatus);
        
      }
    else if (winStatus === "Lose") {
        elm("winLosePic").src = "./youlose.png";
        var resultText=loseText[Math.floor(Math.random() * loseText.length)];
        loseStreak++;
        if (longLoseStreak===0) {
            longLoseStreak = 1;
        }
        if (winStreak > longWinStreak) {
            longWinStreak = winStreak;
        }
        if (loseStreak > longLoseStreak) {
            longLoseStreak = loseStreak;
        }
        lossCount++;  winStreak=0;
        updateAll(userGuessText,compGuessText,resultText,winStatus);
        console.log(winStatus + " Loss Count: " + tieCount)
        
      }
      else {
        var resultText=tieText[Math.floor(Math.random() * tieText.length)];
        tieCount++; winStreak = 0; loseStreak = 0;
        updateAll(userGuessText,compGuessText,resultText,winStatus);
        console.log(winStatus + " tiecount: " + tieCount)
    }
    };

  function  isWin(userGuess,computerGuess) {
     if ((userGuess === "r" && computerGuess === "s") || (userGuess === "s" && computerGuess==="p") || (userGuess==="p" && computerGuess === "r")) {

        console.log("results: Win");
        return "Win";
        
      }
      else if (userGuess===computerGuess) {

        console.log("results: Tie");
        return "Tie";
        
      }
      else {
        console.log("results: Lose");
        return "Lose";
        
      }
    };

  function reset() {
    alert("Thanks for playing!");
    userGuess="";
    computerGuess="";
    winCount=0;
    loseCount=0;
    tieCount=0;
    winStreak=0;
    longWinStreak=0;
    loseStreak=0;
    longLoseStreak=0;
    elm("smartText").innerHTML=""
    elm("recap").innerHTML= "Play again.";
    elm("wins").innerHTML= 0;
    elm("losses").innerHTML= 0;
    elm("ties").innerHTML= 0;
    elm("winStreak").innerHTML= winStreak;
    elm("longWinStreak").innerHTML= longWinStreak;
    elm("loseStreak").innerHTML= loseStreak;
    elm("longLoseStreak").innerHTML= longLoseStreak;
    elm("winLosePic").src = "";
    //elm("winLosePic").innerHTML= "Press 'r', 'p', or 's' to begin.";
    elm("userPic").src = "";
    elm("robotPic").src = "";

   // window.open("index.html")

  };

  function updateAll(userGuessText,compGuessText,resultText,winStatus) {
      console.log("compguesstext:" + compGuessText);
      console.log("userguesstext: " + userGuessText);
      console.log("winstatus:"+ winStatus);
    var winLose 
    if (winStatus==="Win") {
        winLose = "You Win!";
    }
    else if (winStatus==="Lose") {
        winLose = "You Lose!";
    }
    else {
        winLose = "You Tied!";
    }
    console.log("winLose is set:" + winLose)
    recapText =  "You chose: " + userGuessText + " The computer chose: " + compGuessText ;
    winText = winCount;
    loseText = lossCount;
    tieText = tieCount;
        elm("smartText").innerHTML= resultText;
        elm("recap").innerHTML= recapText;
        elm("wins").innerHTML= winText;
        elm("losses").innerHTML= loseText;
        elm("ties").innerHTML= tieText;
        elm("winStreak").innerHTML= winStreak;
        elm("longWinStreak").innerHTML= longWinStreak;
        elm("loseStreak").innerHTML= loseStreak;
        elm("longLoseStreak").innerHTML= longLoseStreak;
  }

  

  function elm(elementID) {
    return document.getElementById(elementID);
  }