# What Programming Language is for You Webpage

#### **. Patrick Osten, Bess Campbell, 10/23/2020**

**[Click here to open in web browser]**

## Description



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

Test: user clicks button, gets a number from 1-6
Expect: user clicks button, get (4)

Test: if diceRoll() = 1, change player turn to false or true
expect: start with player1turn = true && player2.turn = false: then diceRoll=1, player1.turn = false && diceRoll=1, player2.turn = true

Test: when players roll anything but a 1 and their turn value is true, add that number to the roundScore array in player object
Expect: player1 rolls (4), player1.roundScore.push(4);

Description: Player.prototype.hold()

Test: player object should store playername, round score, turn value, total score
Expect:  let player2 = new Player("player2", false, [], 0);

Test: should sum roundScore and add it to totalScore
Expect: player1.roundScore = [1,2,3,4].toEqual(totalScore)

Test: set roundScore array to zero
Expect: player1.roundscore = [1,2,3,4].toEqual([0])

## Known Bugs
* 

## Support and contact details

Feel free to reach me through email with any comments:
*Patrickosten040@gmail.com*

## Technologies Used

- HTML5 language  
- CSS 
- Bootstrap
- Javascript
- JQuery

## License

[MIT license](https://opensource.org/licenses/MIT)

## Copyright (c) 2020 **_Patrick Osten_**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.