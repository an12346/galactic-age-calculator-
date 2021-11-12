export function Mars(age) {
this.age = age;
};

Mars.prototype.calculateMarsAge = function() {
  let marsAge = (this.age * 365)/687;
  return marsAge;
}

Mars.prototype.lifeExpMars = function() {
  let lifeExpMar = 100 - (this.age * 365)/687;
  return Math.abs(lifeExpMar);
};