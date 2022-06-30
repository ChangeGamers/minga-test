const SCORE_NAMES = ["Love", "Fifteen", "Thirty", "Forty"];
const FORTY_SCORE = 3;
const PLAYER1_NAME = "player1";
const PLAYER2_NAME = "player2";

var TennisGame1 = function(player1Name, player2Name) {
    this.player1Score = 0;
    this.player2Score = 0;
    
    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame1.prototype.wonPoint = function(playerName) {
    if (playerName === PLAYER1_NAME) {
        ++this.player1Score;
    } else {
        ++this.player2Score;
    }
};

TennisGame1.prototype.getScore = function() {
    let score = "";

    if (this.player1Score === this.player2Score) {
        if (this.player1Score < FORTY_SCORE) {
            score = SCORE_NAMES[this.player1Score] + "-All";
        } else {
            score = "Deuce";
        }
    } else if (this.player1Score > FORTY_SCORE || this.player2Score > FORTY_SCORE) {
        const minusResult = this.player1Score - this.player2Score;
        const statement = Math.abs(minusResult) === 1 ? "Advantage" : "Win for";
        const win_player = minusResult > 0 ? PLAYER1_NAME : PLAYER2_NAME;
        score = statement + " " + win_player;
    } else {
        score = SCORE_NAMES[this.player1Score] + "-" + SCORE_NAMES[this.player2Score];
    }

    return score;
};

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}