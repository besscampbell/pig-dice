# Pig Dice

####  Play this classic 2 player game online, 11.04.2020

#### By **Patrick Osten, Bess Campbell**

## Description

 Click the pig to roll the die. When it is your turn make sure you decide to hold before it is too late or when your roll a 1 you will lose your points for that turn. Points are compiled as you roll. When you roll a 1 or decide to hold your points your turn is over. The first player to 100 wins!

## Installation Requirements

- Up to date internet browser ([Chrome](https://www.google.com/chrome/?brand=CHBD&gclid=Cj0KCQjw28T8BRDbARIsAEOMBcy9jwgkNels1LOSIWTx4sDazLfEgC6PylTug62KqyWPeA0EMyr3254aAjTTEALw_wcB&gclsrc=aw.ds), [Mozilla](https://www.mozilla.org/en-US/firefox/), [Opera](https://www.opera.com/)).
 
 
 -**optional**- 
- Code editor like [VsCode](https://code.visualstudio.com/download) to view source code.

## Setup

#### From the web
1. Go to this [GitHub Repo Page]().
2. Click the "Code" and click the 'Download zip' option.
3. Unzip the file, navigate to the root directory (week-1-project folder).
4. opent the 'index.html' file with your web browser.

--or--

#### From Terminal

1. Open GitBash/Bash, type 
: `git clone {}`
2. Navigate to the week-1-project directory and type
: `code .`
3. Your code editor will open the files, from there you must open the index.html file in your browser.

## Specs

Description: diceRoll()

Test: "It should return a number from 1-6 when a user clicks a button"
Expect: user clicks button, get (4)

Test: "It should change player turn to false or true when the die is rolled"
Expect: start with player1turn = true && player2.turn = false: then diceRoll=1, player1.turn = false && diceRoll=1, player2.turn = true

Test: "It should add the players diceRoll value to the roundScore array in hte player object when the player's turn is equal to true and if they do not roll a 1"
Expect: player1 rolls (4), player1.roundScore.push(4);

Description: Player(user, turn, roundScore, totalScore)

Test: "It should create a player constructor to store player name, round score,turn value, and total score" 
Expect:  let player2 = new Player("player2", false, [], 0);

Description: Player.prototype.hold()

Test: "It should sum roundScore and add it to totalScore"
Expect: player1.roundScore = [1,2,3,4].toEqual(totalScore)

Test: "It should set roundScore array to zero"
Expect: player1.roundscore = [1,2,3,4].toEqual([0])

Test: "It should announce that a player has won when totalScore reaches 100 or above"
Expect: player1.totalScore = 100, alert "you've won!"

## Known Bugs

Hold button will return error if pressed more than once but should not affect game.

## Support and contact details

Feel free to reach out through email with any comments:
<Patrickosten040@gmail.com>
<bess.k.campbell@gmail.com>

## Technologies Used

- HTML5 language  
- CSS 
- Bootstrap
- Javascript
- JQuery

## License

[MIT license](https://opensource.org/licenses/MIT)

## Copyright (c) 2020 **_Bess Campbell, Patrick Osten_**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.