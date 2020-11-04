// Business Logic

function Player (user, turn, roundScore, totalScore) {
  this.user = user;
  this.turn = turn;
  this.roundScore = roundScore;
  this.totalScore = totalScore;
}

let player1 = new Player("player1", true, [], 0);
let player2 = new Player("player2", false, [], 0);

function diceRoll(){
  let roll = 1+ Math.floor(Math.random()*6);
  console.log(roll)
  if (roll === 1) {
      player1.turn= !player1.turn
      player2.turn= !player2.turn
  }
  else if (roll !=1) {
    if (player1.turn = true) {
      player1.roundScore.push(roll);
    }
    else if (player2.turn = true) {
      player2.roundScore.push(roll);
    }
  }
}

const add = (a, b) => a+b

Player.prototype.hold = function() {
  this.totalScore = this.roundScore.reduce(add) 
  ;
  console.log(this.totalScore);
};

// Contact.prototype.fullName = function() {
//   return this.firstName + " " + this.lastName;
// }
// Logic UI
