const Util = {
  inherits(child, parent) {
    function Surrogate() {};
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate();
    child.prototype.constructor = child;
  },
  randomVec (length) {
    var deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  }
}


module.exports = Util;
