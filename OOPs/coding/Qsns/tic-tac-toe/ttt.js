
class player {
    constructor(name, symbol) {
        this.name = name;
        this.symbol = symbol
    }
}

let p1 = new player("john", "✖")
let p2 = new player("doe", "⭕")
// console.log(p1, "p1");
// console.log(p2, "p1");
class Board {
    constructor() {
        this.Board = []
    }
    createBoard() {
        return [[null, null, null], [null, null, null], [null, null, null]]
    }
}
let b1 = new Board().createBoard()
// console.log(b1, "b1");
class Game {
    constructor(p1, p2, board) {
        this.firstPlayer = p1.name;
        this.secondPlayer = p2.name;
        this.board = board;
        this.presentTurn = p1.name
        this.totalNoOfTurns = 0;
        this.winner = null;
        this.gameover = null
    }
    move(player, index) {
        if (this.gameover) {
            console.log("gam iovber");
            return
        }


        // console.log(name);
        // console.log(index);
        if (this.board[index[0]][index[1]] == null) {
            if (this.presentTurn == player.name) {
                this.board[index[0]][index[1]] = player.symbol
                this.totalNoOfTurns += 1
                if (this.totalNoOfTurns >= 5) {
                    let result = check(this.board, player, index)
                    if (result.case) {
                        console.log("the winner is ", result.winner);
                        this.gameover = true
                        return
                    }
                }
                if (this.totalNoOfTurns == 9) {
                    console.log("game over its a draw");
                    this.gameover = true
                    return
                }
                if (this.presentTurn == p1.name
                ) {
                    this.presentTurn = p2.name
                }
                else {
                    this.presentTurn = p1.name
                }
            }
            else {
                console.error("not ur turn");
            }
        }
        else {
            // console.log(index[0], [index[1]]);
            console.error("already filled");
        }
    }
}
let g1 = new Game(p1, p2, b1);
// g1.move(p1, [0, 0])
// g1.move(p2, [1, 1])
// g1.move(p1, [2, 2])
// g1.move(p2, [0, 1])
// g1.move(p1, [2, 0])
// g1.move(p2, [2, 1])
/////////////////////////////


// g1.move(p1, [0, 0]) // X
// g1.move(p2, [0, 1]) // O
// g1.move(p1, [0, 2]) // X
// g1.move(p2, [1, 1]) // O
// g1.move(p1, [1, 0]) // X
// g1.move(p2, [1, 2]) // O
// g1.move(p1, [2, 1]) // X
// g1.move(p2, [2, 0]) // O
// g1.move(p1, [2, 2]) // X

//////////



g1.move(p1, [0, 0]); // X
g1.move(p2, [1, 1]); // O
g1.move(p1, [0, 1]); // X
g1.move(p2, [2, 2]); // O
g1.move(p1, [0, 2]); // X
g1.move(p2, [2, 0]); // O
g1.move(p1, [1, 0]); // X
g1.move(p2, [1, 2]); // O **(Winning Move!)**





// console.log(g1, "g1");


function check(board, player, index) {
    let result = hasThreeConsecutive(board, player.symbol)
    if (result) {
        return { "case": true, winner: player }
    }
    return { "case": false }
}

function hasThreeConsecutive(matrix, target) {
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (matrix[i][0] === target && matrix[i][1] === target && matrix[i][2] === target) {
            return true; // Found in row
        }
    }
    // Check columns
    for (let j = 0; j < 3; j++) {
        if (matrix[0][j] === target && matrix[1][j] === target && matrix[2][j] === target) {
            return true; // Found in column
        }
    }
    // Check main diagonal (\)
    if (matrix[0][0] === target && matrix[1][1] === target && matrix[2][2] === target) {
        return true;
    }
    // Check anti-diagonal (/)
    if (matrix[0][2] === target && matrix[1][1] === target && matrix[2][0] === target) {
        return true;
    }
    return false; // No consecutive found
}