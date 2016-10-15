
function MovingObject(options) {
  this.posX = options.pos[0];
  this.posY = options.pos[1];
  this.velX = options.vel[0];
  this.velY = options.vel[1];
  this.radius = options.radius;
  this.color = options.color;
  this.game = options.game;
}

MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI, false);
  ctx.fill();
}

MovingObject.prototype.move = function () {
  this.posX += this.velX;
  this.posY += this.velY;
};


module.exports = MovingObject;
