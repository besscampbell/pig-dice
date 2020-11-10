// Business Logic
let users = new Users();
let player1 = new Player("Player One", true, [], 0);
let player2 = new Player("Player Two", false, [], 0);
users.players.push(player1, player2);


function Player (user, turn, roundScore, totalScore) {
  this.user = user;
  this.turn = turn;
  this.roundScore = roundScore;
  this.totalScore = totalScore;
}

function Users () {
  this.players = []
}

Player.prototype.diceRoll = function(){
  let roll = 1+ Math.floor(Math.random()*6);
  console.log(roll)
  if (roll === 1) {
      player1.turn= !player1.turn
      player2.turn= !player2.turn
      this.roundScore = [];
      alert("You rolled in the mud with that ONE! Your turn is over!");
  } else if (roll !=1) {
      this.roundScore.push(roll);
      return this.roundScore;
  }
}

Player.prototype.hold = function() {
  if (this.roundScore[0] != 0) {
    const add = (a, b) => a+b;
    this.totalScore = this.totalScore + this.roundScore.reduce(add);
    this.roundScore = [];
    player1.turn= !player1.turn
    player2.turn= !player2.turn
    return this.roundScore; 
  }
  if (this.totalScore >= 100) {
      alert("Back to the sty! You pass the pigs the best! You win!");
  }
 };

Users.prototype.whoseTurn = function() {
  for (let i=0; i< this.players.length; i++){
    if (this.players[i].turn === true) {
    return this.players[i].diceRoll();
    }
  }
}

Users.prototype.holdTurn = function() {
  for (let i=0; i< this.players.length; i++){
    if (this.players[i].turn === true) {
      return this.players[i].hold();
    } 
  }
}

$(document).ready(function() {
  let playerOne = player1.user;
  $("#playerOneName").text(playerOne);
  let playerTwo = player2.user;
  $("#playerTwoName").text(playerTwo);
  $(".img").click(function(){
    users.whoseTurn();
    let player1Score = player1.roundScore
    $("#playerOneArray").text(player1Score)
    let player2Score = player2.roundScore
    $("#playerTwoArray").text(player2Score)
    let player1Total = player1.totalScore;
    $("#playerOneScore").text(player1Total);
    let player2Total = player2.totalScore;
    $("#playerTwoScore").text(player2Total);
  });  
  $("#hold").click(function(){
    users.holdTurn();
  });
});