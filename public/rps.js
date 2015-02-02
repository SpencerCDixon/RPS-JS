window.RPS = {
  Models: {},
  Views: {}
}

////////////
// Models //
////////////

window.RPS.Models.Player = function(name) {
  this.that = this;
  this.name = name;
  this.score = 0;

  this.getChoice = function() {
    this.choice = prompt("What do you choose? R/P/S?");
  }
}

window.RPS.Models.Computer = function () {
  this.that = this;
  this.name = "Computer";

  this.getChoice = function() {
    var randomNumber = Math.floor((Math.random() * 3) + 1);
    var choices = ["r", "p", "s"];
    return this.choice = choices[randomNumber];
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

////////////
// Views ///
////////////

window.RPS.Views.Piece = function(typeOfPiece) {
  this.name = typeOfPiece;

  this.makePiece = function() {
    var $img = $('<img>').attr({
      src: this.name + '.png',
      id: 'newpiece'
    });
    return $img;
  }
}

// Playing Game
var rock = new window.RPS.Views.Piece('rock');
var rockImage = rock.makePiece();
$('body').append(rockImage);

var player = new window.RPS.Models.Player("spencer");
var computer = new window.RPS.Models.Computer();

player.getChoice();
console.log(player.choice);

computer.getChoice();
console.log(computer.choice);

var calc = new window.RPS.Models.ScoreCalculator(player.choice, computer.choice);

console.log(calc.findWinner());

