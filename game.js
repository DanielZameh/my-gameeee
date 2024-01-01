// Variables to keep track of the game state
let gameState = "initial";
let currentPlayer = 1;
let playerColors = ["red", "blue", "green", "yellow"];

// Create the initial game board
let board = [
    ["white", "white", "white", "white"],
    ["white", "white", "white", "white"],
    ["white", "white", "white", "white"],
    ["white", "white", "white", "white"]
];

// Function to draw the game board on the screen
function drawBoard() {
    let boardElement = document.getElementById("board");
    boardElement.innerHTML = "";

    for (let i = 0; i < board.length; i++) {
        let rowElement = document.createElement("div");
        rowElement.style.display = "flex";

        for (let j = 0; j < board[i].length; j++) {
            let cellElement = document.createElement("div");
            cellElement.style.width = "50px";
            cellElement.style.height = "50px";
            cellElement.style.border = "1px solid black";
            cellElement.style.backgroundColor = board[i][j];
            cellElement.setAttribute("onclick", "makeMove(" + i + "," + j + ")");
            rowElement.appendChild(cellElement);
        }

        boardElement.appendChild(rowElement);
    }
}

// Function to start the game
function startGame() {
    gameState = "ongoing";
    drawBoard();
}

// Function to check if a player has won
function checkWin() {
    // Add logic to check for a win condition here
}

// Function to handle player moves
function makeMove(row, col) {
    if (gameState !== "ongoing") {
        return;
    }

    if (board[row][col] === "white") {
        board[row][col] = playerColors[currentPlayer - 1];
        currentPlayer = (currentPlayer % 4) + 1;
        checkWin();
    }

    drawBoard();
}
