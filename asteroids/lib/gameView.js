const Game = require("./game")
const Ship = require("./ship")

function GameView(game,ctx) {
  this.ctx = ctx;
  this.game = game;
  this.ship = this.game.addShip();
}

GameView.prototype.start = function() {

}
