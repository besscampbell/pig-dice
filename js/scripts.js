// Business Logic
let users = new Users();
let player1 = new Player("player1", true, [], 0);
let player2 = new Player("player2", false, [], 0);
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
      console.log(this);
      return this.roundScore;
  } else if (roll !=1) {
      this.roundScore.push(roll);
      return this.roundScore;
  }
}

Player.prototype.hold = function() {
  if (this.roundScore[0] != 0) {
    const add = (a, b) => a+b;
    this.totalScore = this.totalScore + this.roundScore.reduce(add);
    console.log(this.totalScore);
    this.roundScore = [];
    player1.turn= !player1.turn
    player2.turn= !player2.turn
    console.log(this);
    return this.roundScore;
    if (this.totalScore >= 100) {
      alert("Back to the sty! You pass the pigs the best! You win!");
    }
  }
};

Users.prototype.whoseTurn = function() {
  for (let i=0; i< this.players.length; i++){
    // if (this.players[i]){
      if (this.players[i].turn === true) {
      return this.players[i].diceRoll();
      }
    // }  
  }
}

Users.prototype.holdTurn = function() {
  for (let i=0; i< this.players.length; i++){
    // if (this.players[i]){
      if (this.players[i].turn === true) {
        console.log(this.players[i]);
        return this.players[i].hold();
      }
    // }  
  }
}

// Logic UI

$(document).ready(function() {

  $(".img").click(function(){
    let player1Score = player1.roundScore
    $("#playerOneArray").text(player1Score + " ")
    // $("#playerOneArray").html(player1.diceRoll());
    users.whoseTurn();
    // });
  });  
  $("#hold").click(function(){
    
    users.holdTurn();
  });
  // $(".img").click(function() { document.getElementById("#playerOneArray").innerHTML = player1.roundScore})
  // let player1Score = player1.roundScore
  // $(".img").click(function(){$("#playerOneArray").text(player1Score)})
  // console.log(player1.roundScore)
});