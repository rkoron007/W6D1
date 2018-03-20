/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const MovingObject = __webpack_require__(1);
const Util = __webpack_require__(2);
const Asteroid = __webpack_require__(3);
window.MovingObject = MovingObject;
window.Asteroid = Asteroid;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

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


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var Util = {
  inherits(childClass, parentClass) {
    function Surrogate () {}
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
    childClass.prototype.constructor = childClass;
  },

  randomVec(length) {
   const deg = 2 * Math.PI * Math.random();
   return Util.scale([Math.sin(deg), Math.cos(deg)], length);
    },
    scale(vec, m) {
   return [vec[0] * m, vec[1] * m];
 }
};


module.exports = Util;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const MovingObject = __webpack_require__(1);
const Util = __webpack_require__(2);

function Asteroid (hash) {
  Util.inherits(Asteroid, MovingObject);
  this.color = "red";
  this.radius = 10;
  this.vel = Util.randomVec(this.radius);
  this.pos = hash['pos'];
}
module.exports = Asteroid;


/***/ })
/******/ ]);