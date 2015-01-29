window.RPS = {
  Models: {},
  Views: {}
}

window.RPS.Models.Player = function(name) {
  this.name = name
  this.score = 0

  this.getChoice = function() {
    this.choice = prompt("What do you choose? R/P/S?");
  }
}

window.RPS.Models.Computer = function () {
  var randomNumber = Math.floor((Math.random() * 3) + 1);
  var choices = ["r", "p", "s"];

  this.name = "Computer";
  this.choice = choices[randomNumber];

  this.getChoice = function() {
    debugger;
    this.choice = choices[randomNumber];
  }
}

window.RPS.Models.ScoreCalculator = function(player_choice, computer_choice) {
  this.player = player_choice;
  this.computer = computer_choice;

  this.findWinner = function() {
    if (this.player === this.computer) {
      return "Tie game"
    } else if (this.player === "r" && this.computer === "s") {
      return "Player wins"
    } else if (this.player === "s" && this.computer === "p") { 
      return "Player wins"
    } else if (this.player === "p" && this.computer === "r") { 
      return "Player wins"
    } else {
      return "Computer wins"
    }
  }
}


// Sanity check for creating JS objects
var player = new window.RPS.Models.Player("spencer");
var computer = new window.RPS.Models.Computer();
debugger;

player.getChoice();

console.log(player.choice);

var calc = new window.RPS.Models.ScoreCalculator(player.choice, computer.choice);

console.log(calc.findWinner());

