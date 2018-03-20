 Function.prototype.inherits = function(Parent) {
  function Surrogate (){}
  Surrogate.prototype = Parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

function MovingObject () {
  this.right = function() {
    console.log(`goes rightright!!`);
  };
}

MovingObject.prototype.right = function() {
  console.log(`goes rightright!!`);
};


function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);
