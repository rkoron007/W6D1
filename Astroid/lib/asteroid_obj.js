const MovingObject = require("./moving_object.js");
const Util = require("./util.js");

function Asteroid (hash) {
  Util.inherits(Asteroid, MovingObject);
  this.color = "red";
  this.radius = 10;
  this.vel = Util.randomVec(this.radius);
  this.pos = hash['pos'];
}
module.exports = Asteroid;
