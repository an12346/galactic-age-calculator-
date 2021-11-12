export function Mars(age, lifeExpectancy) {
this.age = age;
this.lifeExpectancy = lifeExpectancy;
};

Mars.prototype.calculateMarsAge = function() {
  let marsAge = (this.age * 365)/687;
  return marsAge;
}

Mars.prototype.lifeExpMars = function() {
  let lifeExpMar = this.lifeExpectancy - (this.age * 365)/687;
  return Math.abs(lifeExpMar);
};