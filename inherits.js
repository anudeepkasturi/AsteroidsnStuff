Function.prototype.inherits = function(parent) {
  const child = this;
  function Surrogate() {};
  Surrogate.prototype = parent.prototype;
  child.prototype = new Surrogate();
  child.prototype.constructor = child;
}

function MovingObject (name) {
  this.name = name;
};

function Ship (name) {
  MovingObject.call(this, name)
};
Ship.inherits(MovingObject);

function Asteroid () {};
Asteroid.inherits(MovingObject);

MovingObject.prototype.sayHi = function() {
  console.log(`hi ${this.name}`);
}

Asteroid.prototype.explode = function () {
  console.log(`boom!`);
};
