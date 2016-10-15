const Util = require("./utils")
const MovingObject = require("./movingObject")

const DEFAULTS = {
	COLOR: "#7815A0",
	RADIUS: 25,
	SPEED: 4
};


function Asteroid(options = {}) {
  options.color = options.color || DEFAULTS.COLOR;
  options.radius = options.radius || DEFAULTS.RADIUS;
  options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED);
  MovingObject.call(this,options);
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;
