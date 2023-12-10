const Gameboard = (function() { {
   return this.board = 
   [[1,2,3],
    [2,3,3],
    [1,2,3]];
}})();

function createPlayer(name, score = 0) {
    let scoreBoard = score;
    return {name, scoreBoard};
}

function makeMove(y, x, c) {
    Gameboard[y][x] = c;
}

function checkBoard() {
    for (let i = 0; i < 3; i++) {
       if (Gameboard[i][0] === Gameboard[i][1] && Gameboard[i][1] === Gameboard[i][2]) {
        console.log('Game Over1')
       } else if (Gameboard[0][i] === Gameboard[1][i] && Gameboard[1][i] === Gameboard[2][i]){
        console.log('Game Over2')
       } else if (Gameboard[i][i] == Gameboard[i+1][i+1] && Gameboard[i+1][i+1] == Gameboard[i+2][i+2]) {
        console.log('Game Over3')
       } else if( Gameboard[i][i+2] == Gameboard[i+1][i+1] && Gameboard[i+1][i+1] == Gameboard[i+2][i]) {
        console.log('Game over4')
       } else {
        break;
       }
    }
}







