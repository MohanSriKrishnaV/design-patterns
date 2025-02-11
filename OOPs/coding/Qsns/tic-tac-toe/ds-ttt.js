class Player {
    constructor(name, symbol) {
        this.name = name;
        this.symbol = symbol;
    }
}

class Board {
    constructor(size = 3) {
        this.size = size;
        this.grid = this.createBoard();
    }

    createBoard() {
        return Array.from({ length: this.size }, () => Array(this.size).fill(null));
    }

    isCellEmpty(row, col) {
        return this.grid[row][col] === null;
    }

    updateCell(row, col, symbol) {
        if (this.isCellEmpty(row, col)) {
            this.grid[row][col] = symbol;
            return true;
        }
        return false;
    }

    checkWin(symbol) {
        // Check rows
        for (let i = 0; i < this.size; i++) {
            if (this.grid[i].every(cell => cell === symbol)) {
                return true;
            }
        }

        // Check columns
        for (let j = 0; j < this.size; j++) {
            if (this.grid.every(row => row[j] === symbol)) {
                return true;
            }
        }

        // Check diagonals
        if (this.grid.every((row, index) => row[index] === symbol)) {
            return true;
        }
        if (this.grid.every((row, index) => row[this.size - 1 - index] === symbol)) {
            return true;
        }

        return false;
    }

    isBoardFull() {
        return this.grid.every(row => row.every(cell => cell !== null));
    }
}

class Game {
    constructor(player1, player2, boardSize = 3) {
        this.players = [player1, player2];
        this.board = new Board(boardSize);
        this.currentPlayerIndex = 0;
        this.totalTurns = 0;
        this.winner = null;
        this.gameOver = false;
    }

    getCurrentPlayer() {
        return this.players[this.currentPlayerIndex];
    }

    switchPlayer() {
        this.currentPlayerIndex = 1 - this.currentPlayerIndex;
    }

    move(row, col) {
        if (this.gameOver) {
            console.log("Game is over.");
            return;
        }

        const currentPlayer = this.getCurrentPlayer();

        if (this.board.updateCell(row, col, currentPlayer.symbol)) {
            this.totalTurns++;

            if (this.board.checkWin(currentPlayer.symbol)) {
                this.winner = currentPlayer;
                this.gameOver = true;
                console.log(`The winner is ${currentPlayer.name}!`);
                return;
            }

            if (this.board.isBoardFull()) {
                this.gameOver = true;
                console.log("It's a draw!");
                return;
            }

            this.switchPlayer();
        } else {
            console.error("Invalid move: Cell is already occupied or out of bounds.");
        }
    }
}

// Example Usage
const player1 = new Player("John", "✖");
const player2 = new Player("Doe", "⭕");

const game = new Game(player1, player2);

game.move(0, 0); // John's move
game.move(1, 1); // Doe's move
game.move(0, 1); // John's move
game.move(2, 2); // Doe's move
game.move(0, 2); // John's move (Winning Move!)