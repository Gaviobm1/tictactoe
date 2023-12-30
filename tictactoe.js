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
     });
        break;
       }
    }
}

const gameLoop =  () =>  {
    let counter = 1;
    let player1Counter = '';
    let player2Counter = '';
    const cellrow1 = document.getElementsByClassName('cellrow1');
    const cellrow2 = document.getElementsByClassName('cellrow2');
    const cellrow3 = document.getElementsByClassName('cellrow3');
    const xButton = document.getElementById("xButton");
    const oButton = document.getElementById("oButton");
    xButton.addEventListener('click', function () {
        counter = 1;
        player1Counter = "X";
        player2Counter = "O"
    })
    oButton.addEventListener('click', function() {
        counter = 1;
        player1Counter = "O";
        player2Counter = "X"
    })
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
               if (this.textContent != '' || player1Counter == '') {
                return;
               } else if (counter % 2 == 0) {
                this.textContent = player2Counter;
                makeMove(i, j, player2Counter);
                checkBoard();
               } else {
                this.textContent = player1Counter;
                makeMove(i, j, player1Counter);
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
        gameLoop();
    });
})();

const playGame = (() => {
    gameLoop();
})();

