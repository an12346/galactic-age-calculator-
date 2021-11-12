export function Jupiter(age, lifeExpectancy) {
  this.age = age;
  this.lifeExpectancy = lifeExpectancy
};

Jupiter.prototype.calculateJupiterAge = function() {
  let jupiterAge = (this.age * 365)/4380;
  return jupiterAge;
};

Jupiter.prototype.lifeExpJupiter = function() {
  let lifeExpJup = this.lifeExpectancy - (this.age * 365)/4380;
  return Math.abs(lifeExpJup);
};