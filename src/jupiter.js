export function Jupiter(age) {
  this.age = age;
};

Jupiter.prototype.calculateJupiterAge = function() {
  let jupiterAge = (this.age * 365)/4380;
  return jupiterAge;
};

Jupiter.prototype.lifeExpJupiter = function() {
  let lifeExpJup = 100 - (this.age * 365)/4380;
  return Math.abs(lifeExpJup);
};