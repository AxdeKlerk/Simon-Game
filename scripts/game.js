let game = {
    score: 0,
    currentGame: [""],
    playerMoves: [""],
    choices: ["button1", "button2", "button3", "button4"],
};

module.exports = {game, newGame, showScore, addTurn};

function newGame() {
    game.score = 0;
    game.playerMoves = [];
    game.currentGame = [];
    showScore();
    addTurn();
};

function addTurn() {
   game.playerMoves = [];
   game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
   //showTurns();
}

function showScore() {
    document.getElementById("score").innerText = game.score;
};
