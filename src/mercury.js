export function Mercury(age, lifeExpectancy) {
  this.age = age;
  this.lifeExpectancy = lifeExpectancy;
};

Mercury.prototype.calculateMerAge = function() {
  let mercuryAge = (this.age * 365)/88;
  return mercuryAge;
};

Mercury.prototype.lifeExpMercury = function() {
  let lifeExpMerc = this.lifeExpectancy - (this.age * 365)/88;
  return Math.abs(lifeExpMerc);
};