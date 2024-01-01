let counter = 0;

const Gameboard = (function() { {
   return this.board = 
   [[1, 2, 3],
    [3, 2, 1],
    [2, 3, 1]];
}})();

function makeMove(y, x, c) {
    Gameboard[y][x] = c;
}

const checkBoard = function() {
    for (let i = 0; i < 3; i++) {
        if (Gameboard[i][0] === Gameboard[i][1] && Gameboard[i][1] === Gameboard[i][2]) {
            const gameOver = document.createElement("div");
            gameOver.textContent = `The winner is ${Gameboard[i][0]}`;
            gameOver.setAttribute("class", "gameOver");
            document.body.appendChild(gameOver);
            gameOver.addEventListener('click', () => {
            gameOver.remove();
            gameLoop();
            const optionButtons = document.getElementsByName("playchoice");
            for(let i = 0; i < optionButtons.length; i++) {
                optionButtons[i].checked = false; 
            }
            counter = 0;
        });
            break;
       } else if (Gameboard[0][i] === Gameboard[1][i] && Gameboard[1][i] === Gameboard[2][i]){
            const gameOver = document.createElement("div");
            gameOver.textContent = `The winner is ${Gameboard[0][i]}`;
            gameOver.setAttribute("class", "gameOver");
            document.body.appendChild(gameOver);
            gameOver.addEventListener('click', () => {
            gameOver.remove();
            gameLoop();
            const optionButtons = document.getElementsByName("playchoice");
            for(let i = 0; i < optionButtons.length; i++) {
                optionButtons[i].checked = false; 
            }
            counter = 0;
        });
            break;
       } else if (Gameboard[0][0] == Gameboard[1][1] && Gameboard[1][1] == Gameboard[2][2]) {
            const gameOver = document.createElement("div");
            gameOver.textContent = `The winner is ${Gameboard[0][0]}`;
            gameOver.setAttribute("class", "gameOver");
            document.body.appendChild(gameOver);
            gameOver.addEventListener('click', () => {
            gameOver.remove();
            gameLoop();
            const optionButtons = document.getElementsByName("playchoice");
            for(let i = 0; i < optionButtons.length; i++) {
                optionButtons[i].checked = false; 
            }
            counter = 0;
     });
            break;
       } else if( Gameboard[0][2] == Gameboard[1][1] && Gameboard[1][1] == Gameboard[2][0]) {
            const gameOver = document.createElement("div");
            gameOver.textContent = `The winner is ${Gameboard[0][2]}`
            gameOver.setAttribute("class", "gameOver");
            document.body.appendChild(gameOver);
            gameOver.addEventListener('click', () => {
            gameOver.remove();
            gameLoop();
            const optionButtons = document.getElementsByName("playchoice");
            for(let i = 0; i < optionButtons.length; i++) {
                optionButtons[i].checked = false; 
            }
            counter = 0;
     });
        break;
       }
    }
}

const gameLoop =  () =>  {
    
    let player1Counter = '';
    let player2Counter = '';
    const cellrow1 = document.getElementsByClassName('cellrow1');
    const cellrow2 = document.getElementsByClassName('cellrow2');
    const cellrow3 = document.getElementsByClassName('cellrow3');
    const xButton = document.getElementById("xButton");
    const oButton = document.getElementById("oButton");
    xButton.addEventListener('click',  ()  => counter = 1);
    oButton.addEventListener('click', () => counter = 2);
    const screenBoard = [cellrow1, cellrow2, cellrow3];
    for (let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            screenBoard[i][j].textContent = '';
            Gameboard[i][j] = Math.random();
        }
    }
    for (let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            screenBoard[i][j].addEventListener('click', function () {
               if (this.textContent != '' || counter == 0) {
                return;
               } else if (counter % 2 == 0) {
                this.textContent = "O";
                makeMove(i, j, "O");
                checkBoard();
               } else if (counter % 2 == 1) {
                this.textContent = "X"
                makeMove(i, j, "X");
                checkBoard();
               }
               counter++;
            })
        }
    }
};

const restartGame = (() => {
    const restartButton = document.getElementById("restartButton");
    restartButton.addEventListener('click', function() {
        const optionButtons = document.getElementsByName("playchoice");
        for(let i = 0; i < optionButtons.length; i++) {
            optionButtons[i].checked = false; 
        }
        counter = 0;
        gameLoop();
    });
})();

const playGame = (() => {
    gameLoop();
})();

