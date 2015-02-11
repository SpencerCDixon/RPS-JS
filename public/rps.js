window.RPS = {
  Models: {},
  Views: {},
  Controller: {}
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

window.RPS.Views.GameBoard = function(playerDiv, computerDiv) {
  this.player = playerDiv;
  this.computer = computerDiv;

  this.buildGame = function () {
    var gameContainer = $('<div>').attr('id', 'gameContainer');
    gameContainer.append(this.player.div);
    gameContainer.append(this.computer.div);
    $('body').append(gameContainer);
  }
  this.buildGame();

  // This needs to be changed, probably isn't properly set up
  this.putListeners = function () {
    var pieces = ["rock", "paper", "scissors"];

    for(i = 0; i < pieces.length; i++) {
      $('#' + pieces[i] + '-' + player.name).on('click', function() {
        player.getChoice();
      });
    }
  }
  this.putListeners();
}

window.RPS.Views.PieceDiv = function(rock, paper, scissors, player) {
  this.rock = rock;
  this.paper = paper;
  this.scissors = scissors;
  this.div = $('<div>').attr({id: player.name});

  this.buildDiv = function() {
    var pieces = [this.rock.makePiece(),
                  this.paper.makePiece(),
                  this.scissors.makePiece()];

    for(i = 0; i < pieces.length; i++) {
      this.div.append(pieces[i]);
    }
    return this.div;
  }
  this.buildDiv();
}

window.RPS.Views.Piece = function(typeOfPiece, player) {
  this.player = player
  this.name = typeOfPiece;

  this.makePiece = function() {
    var $img = $('<img>').attr({
      src: '/img/' + this.name + '.png',
      id: this.name + '-' + this.player.name
    });
    return $img;
  }
}

// Playing Game
var player = new window.RPS.Models.Player("spencer");
var computer = new window.RPS.Models.Computer();

// Player Pieces
var rock = new window.RPS.Views.Piece('rock', player);
var paper = new window.RPS.Views.Piece('paper', player);
var scissors = new window.RPS.Views.Piece('scissors', player);
var playerDiv = new window.RPS.Views.PieceDiv(rock, paper, scissors, player);

// Computer Pieces
var rockCPU = new window.RPS.Views.Piece('rock', computer);
var paperCPU = new window.RPS.Views.Piece('paper', computer);
var scissorsCPU = new window.RPS.Views.Piece('scissors', computer);
var computerDiv = new window.RPS.Views.PieceDiv(rockCPU, paperCPU, scissorsCPU, computer);

// $('body').append(playerDiv);
// $('body').append(computerDiv);
// Gameboard
var gameboard = new window.RPS.Views.GameBoard(playerDiv, computerDiv);

// Double checking
// var rockImage = rock.makePiece();
// var paperImage = paper.makePiece();
// var scissorsImage = scissors.makePiece();
// $('body').append(rockImage);
// $('body').append(paperImage);
// $('body').append(scissorsImage);

//
// player.getChoice();
// console.log(player.choice);
//
// computer.getChoice();
// console.log(computer.choice);
//
// var calc = new window.RPS.Models.ScoreCalculator(player.choice, computer.choice);
//
// console.log(calc.findWinner());
//
