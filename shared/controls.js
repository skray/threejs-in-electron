/*
 * Based heavily on https://github.com/mrdoob/three.js/blob/dev/examples/js/controls/FlyControls.js
 */

var THREEDEMO = THREEDEMO || {}

THREEDEMO.controls = function(object) {

  this.object = object;

  this.movementVector = {x: 0, y: 0};
  this.movementState = {left: 0, right: 0, forward: 0, back: 0};
  this.movementSpeed = 1;

  this.update = function (delta) {
    var moveMultiplier = delta * this.movementSpeed;
    this.object.translateX( this.movementVector.x * moveMultiplier );
    this.object.translateY( this.movementVector.y * moveMultiplier );
  }

  this.keydown = function (event) {
    if(event.key === 'w') {
      this.movementState.forward = 1;
    }
    if(event.key === 's') {
      this.movementState.back = 1;
    }
    if(event.key === 'a') {
      this.movementState.left = 1;
    }
    if(event.key === 'd') {
      this.movementState.right = 1;
    }

    this.updateMovementVector();
  }

  this.keyup = function(event) {
    if(event.key === 'w') {
      this.movementState.forward = 0;
    }
    if(event.key === 's') {
      this.movementState.back = 0;
    }
    if(event.key === 'a') {
      this.movementState.left = 0;
    }
    if(event.key === 'd') {
      this.movementState.right = 0;
    }

    this.updateMovementVector()
  }

  this.updateMovementVector = function() {
    this.movementVector.x = -this.movementState.left + this.movementState.right;
    this.movementVector.y = -this.movementState.back + this.movementState.forward;
  }

  window.addEventListener('keydown', this.keydown.bind(this));
  window.addEventListener('keyup', this.keyup.bind(this));
}
