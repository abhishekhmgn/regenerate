const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const winCounter = document.getElementById('winCounter');
let currentPlayer = 'X';
let xWins = 0;
let oWins = 0;
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWin() {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cells[index].textContent === currentPlayer;
        });
    });
}

function handleClick(event) {
    const cell = event.target;
    if (cell.textContent === '') {
        cell.textContent = currentPlayer;
        if (checkWin()) {
            alert(`${currentPlayer} wins!`);
            if (currentPlayer === 'X') {
                xWins++;
            } else {
                oWins++;
            }
            updateWinCounter();
            resetBoard();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function updateWinCounter() {
    winCounter.textContent = `X Wins: ${xWins} | O Wins: ${oWins}`;
}

function resetBoard() {
    cells.forEach(cell => {
        cell.textContent = '';
    });
    currentPlayer = 'X';
}

cells.forEach(cell => {
    cell.addEventListener('click', handleClick);
});