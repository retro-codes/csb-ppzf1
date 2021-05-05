let player1 = "Player 1";
let player2 = "Player 2";

function editName() {
  player1 = prompt("Player 1, What is your name?");
  player2 = prompt("Player 2, What is your name?");

  document.querySelector("p.Player1").innerHTML = player1;
  document.querySelector("p.Player2").innerHTML = player2;
}

function rollTheDice() {
  playSound();
  setTimeout(function() {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    document
      .querySelector(".img1")
      .setAttribute("src", "images/dice" + randomNumber1 + ".jpg");
    document
      .querySelector(".img2")
      .setAttribute("src", "images/dice" + randomNumber2 + ".jpg");

    if (randomNumber1 === randomNumber2) {
      document.querySelector("h2").innerHTML = "DRAW!";
    } else if (randomNumber1 < randomNumber2) {
      document.querySelector("h2").innerHTML = player2 + " WIN! ⛳";
    } else if (randomNumber1 > randomNumber2) {
      document.querySelector("h2").innerHTML = player1 + " WIN! ⛳";
    }
  }, 2500);
}

function playSound() {
  var audio = new Audio("sounds/dice.mp3");
  audio.play();
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
