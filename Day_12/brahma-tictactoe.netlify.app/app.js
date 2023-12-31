const gameboard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
]

let moves = []
let winner = null
let playersTurn = 'player1'
let opponent = 'computer'
let opponentSymbol = 'O'
let Difficulty = 'unbeatable'



function resetBoard() {
    moves = []
    winner = null
    playersTurn = 'player1'
    opponent = opponents.value
    opponentSymbol = 'O'

    const cells = document.querySelectorAll('.cell')

    for (let i = 0; i < gameboard.length; i++) {
        for (let j = 0; j < gameboard[0].length; j++) {
            if (gameboard[i][j] !== '') {
                gameboard[i][j] = ''
            }
        }
    }

    cells.forEach(cell => {
        cell.textContent = ''
    })

}

function players(name, symbol) {
    const getPlayersName = () => {
        return name
    }
    const getPlayerSymbol = () => {
        return symbol
    }
    return {
        getPlayersName,
        getPlayerSymbol
    }
}


const opponents = document.getElementById('opponents')
const difficulty = document.getElementById('difficulty')
const turn = document.querySelector('.turn')



window.addEventListener('DOMContentLoaded', () => {
    opponents.selectedIndex = 0
    difficulty.selectedIndex = 1
})


opponents.addEventListener('input', selectOpponent)
difficulty.addEventListener('input', selectDifficulty)


function selectOpponent() {
    let selectedPlayer = opponents.value
    const Player = players(selectedPlayer, 'O')
    opponent = Player.getPlayersName()
    opponentSymbol = Player.getPlayerSymbol()

    resetBoard()
}

function selectDifficulty() {
    Difficulty = difficulty.value

    resetBoard()
}

function possibleMoves(originBoard) {
    const freeSpaces = []
    for (let i = 0; i < originBoard.length; i++) {
        for (let j = 0; j < originBoard[0].length; j++) {
            if (originBoard[i][j] === '') {
                freeSpaces.push([i, j])
            }
        }
    }
    return freeSpaces
}


function displayGameBoard() {
    const gameBoardContainer = document.querySelector('.gameboard')

    for (let i = 0; i < gameboard.length; i++) {
        for (let j = 0; j < gameboard[0].length; j++) {
            const cell = document.createElement('div')
            cell.classList.add('cell')
            cell.setAttribute('data', `${i},${j}`)
            gameBoardContainer.appendChild(cell)

        }
    }
}
displayGameBoard()

const cells = document.querySelectorAll('.cell')
cells.forEach(cell => {
    cell.addEventListener('click', makeMove)
})


function bestMove() {
    const freeSpace = possibleMoves(gameboard);

    if (freeSpace.length > 0 && playersTurn === 'computer' && !winner && Difficulty === 'easy') {
        const randMove = Math.round(Math.random() * (freeSpace.length - 1));
        const randArr = freeSpace[randMove];
        moves.push([randArr[0], randArr[1]]);
        gameboard[randArr[0]][randArr[1]] = 'O';
        updateCellDisplay(randArr[0], randArr[1], 'O');
        playersTurn = 'player1';
        getWinner(moves);
    }

    if (Difficulty === 'unbeatable' && freeSpace.length > 0 && !winner) {
        let bestScore = -Infinity;
        let bestMove;

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (gameboard[i][j] === '') {
                    gameboard[i][j] = 'O';
                    moves.push([i, j]);
                    let score = minimax(gameboard, 0, false, -Infinity, Infinity);
                    moves.pop();
                    gameboard[i][j] = '';
                    if (score > bestScore) {
                        bestScore = score;
                        bestMove = [i, j];
                    }
                }
            }
        }

        gameboard[bestMove[0]][bestMove[1]] = 'O';
        updateCellDisplay(bestMove[0], bestMove[1], 'O');
        moves.push([bestMove[0], bestMove[1]]);
        playersTurn = 'player1';
        getWinner(moves);
        showModal()
    }
}

function minimax(board, depth, isMaximizing, alpha, beta) {
    const score = getWinner(moves);

    if (winner) {
        return score;
    }

    if (isMaximizing) {
        let bestScore = -Infinity;

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === '') {
                    board[i][j] = 'O';
                    moves.push([i, j]);
                    let score = minimax(board, depth + 1, false, alpha, beta);
                    moves.pop();
                    board[i][j] = '';
                    bestScore = Math.max(bestScore, score - depth);
                    alpha = Math.max(alpha, score);

                    if (beta <= alpha) {
                        break;
                    }
                }
            }
        }

        return bestScore;
    } else {
        let bestScore = Infinity;

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === '') {
                    board[i][j] = 'X';
                    moves.push([i, j]);
                    let score = minimax(board, depth + 1, true, alpha, beta);
                    moves.pop();
                    board[i][j] = '';
                    bestScore = Math.min(bestScore, score + depth);
                    beta = Math.min(beta, score);

                    if (beta <= alpha) {
                        break;
                    }
                }
            }
        }

        return bestScore;
    }
}


function makeMove() {
    const cordinate = this.getAttribute('data')
    const coArr = cordinate.split(',')
    const freeSpace = possibleMoves(gameboard)

    if (freeSpace.length > 0 && playersTurn === 'player1' && !this.textContent && !winner) {
        const row = parseInt(coArr[0])
        const col = parseInt(coArr[1])
        moves.push([row, col])
        gameboard[row][col] = 'x'
        this.textContent = 'x'
        updateCellDisplay(coArr[0], coArr[1], "X")

        if (opponent === 'computer') {

            playersTurn = 'computer'

            function delayedFunction() {

                bestMove()
            }

            setTimeout(delayedFunction, 200);
        } else if (opponent === 'player2') {
            playersTurn = 'player2'
        }
        getWinner(moves)
        showModal()
    } else if (freeSpace.length > 0 && opponent === 'player2' && playersTurn === 'player2' && !winner) {
        const row = parseInt(coArr[0])
        const col = parseInt(coArr[1])
        moves.push([row, col])
        gameboard[row][col] = opponentSymbol
        this.textContent = opponentSymbol
        updateCellDisplay(coArr[0], coArr[1], opponentSymbol)
        playersTurn = 'player1'
        getWinner(moves)
        showModal()
    }
}


function updateCellDisplay(row, col, value) {
    const cells = document.querySelectorAll('.cell')
    cells.forEach(cell => {
        const cellData = cell.getAttribute('data').split(',')
        const cellRow = parseInt(cellData[0])
        const cellCol = parseInt(cellData[1])

        if (cellRow === row && cellCol === col) {
            cell.textContent = value
        }
    })
}


function getWinner(moves) {
    let rows = [0, 0, 0]
    let cols = [0, 0, 0]
    let diagonal = 0
    let antiDiag = 0
    let count = 0
    let score = null

    for (let [row, column] of moves) {
        let value = (count % 2) === 0 ? 1 : -1
        rows[row] += value
        cols[column] += value

        if (row === column) {
            diagonal += value
        }
        if (row + column == 2) {
            antiDiag += value
        }

        if ([rows[row], cols[column], diagonal, antiDiag].includes(3)) {
            winner = 'player1'
            score = -10
            return score
        } else if ([rows[row], cols[column], diagonal, antiDiag].includes(-3)) {
            if (opponent === 'computer') {
                winner = 'computer'
            } else if (opponent === 'player2') {
                winner = 'player2'
            }
            score = 10
            return score
        }
        count++
    }
    if (count < 9) {
        winner = null
        return 'pending'
    } else {
        winner = 'draw'
        score = 0
        return score
    }

}

const modal = document.querySelector('.modal')
const playAgainBtn = document.querySelector('.play-again')
const messageArea = document.querySelector('.message')
playAgainBtn.addEventListener('click', closeModal)

function showModal() {
    if (winner) {
        modal.classList.add('show')

        if (winner === 'draw') {
            messageArea.textContent = `It's a draw!`
        }
        if (winner === 'player2') {
            messageArea.textContent = `Player Two has won the Game!`
        }
        if (winner === 'computer') {
            messageArea.textContent = `Oops! AI! have defeated you!`
        }
        if (winner === 'player1') {
            messageArea.textContent = `Hurrah! You have won the game!`
        }
    }
}

function closeModal() {
    modal.classList.remove('show')
    resetBoard()
}