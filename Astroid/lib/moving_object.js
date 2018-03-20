function MovingObject(hash){
  this.pos = hash["pos"];
  this.vel = hash["vel"];
  this.radius = hash["radius"];
  this.color = hash["color"];
}

function getCTX() {
  const canvasEl = document.getElementById("game-canvas");
  const ctx = canvasEl.getContext("2d");
  return ctx;
}

 MovingObject.prototype.draw = function (ctx = getCTX()) {

     ctx.fillStyle = this.color;
     ctx.beginPath();

     ctx.arc(
       this.pos[0],
       this.pos[1],
       this.radius,
       0,
       2 * Math.PI,
       false
     );

     ctx.fill();
 };

 MovingObject.prototype.move = function (vel) {
   this.pos[0] += vel[0];
   this.pos[1] += vel[1];
 };

module.exports = MovingObject;
