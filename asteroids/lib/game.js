function Game() {
  this.asteroids = []
  this.addAsteroids()
}

const DEFAULTS = {
  DIM_X = 10,
  DIM_Y = 10,
  NUM_ASTEROIDS = 20
}

Game.prototype.allObjects = function() {
  return [].concat(this.ships, this.asteroids, this.bullets);
}

Game.prototype.add = function (object) {
  if (object instanceof Asteroid) {
    this.asteroids.push(object);
  } else if (object instanceof Bullet) {
    this.bullets.push(object);
  } else if (object instanceof Ship) {
    this.ships.push(object);
  } else {
    throw "wtf?";
  }
};

Game.prototype.addAsteroids = function () {
  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
    this.add(new Asteroid({game: this }));
  }
}

Game.prototype.draw = function (ctx) {
  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  this.allObjects().forEach((object) => object.draw(ctx));
};
