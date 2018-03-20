class Vehicle {
  constructor(topSpeed = 50) {
    this.speed = 0;
    this.topSpeed = topSpeed;
  }

  accelerate(increase = 10) {
    console.log("Accelerating!");
    const newSpeed = this.speed + increase;
    this.speed = newSpeed > this.topSpeed ? this.topSpeed : newSpeed;
    this.logSpeed();
  }

  logSpeed() {
    console.log(`Current Speed: ${this.speed}`);
  }

  brake() {
    console.log("Hitting the brakes!");
    this.speed = 0;
    this.logSpeed();
  }
}

const vehicle = new Vehicle();

vehicle.logSpeed();

vehicle.accelerate();

vehicle.accelerate(30);
vehicle.brake();

// --- Pre ES6 version

// function Vehicle(topSpeed) {
//   this.speed = 0;
//   this.topSpeed = topSpeed || 50;
// }

// Vehicle.prototype.accelerate = function(increase) {
//   increase = increase || 10;
//   console.log("Accelerating!");
//   var newSpeed = this.speed + increase;

//   if (newSpeed > this.topSpeed) {
//     this.speed = topSpeed;
//   } else {
//     this.speed = newSpeed;
//   }

//   this.logSpeed();
// };

// Vehicle.prototype.logSpeed = function() {
//   console.log("Current Speed: " + this.speed);
// };

// Vehicle.prototype.brake = function() {
//   console.log("Hitting the brakes!");
//   this.speed = 0;
//   this.logSpeed();
// };

// var vehicle = new Vehicle();

// vehicle.logSpeed();

// vehicle.accelerate();

// vehicle.accelerate(30);

module.exports = Vehicle;
