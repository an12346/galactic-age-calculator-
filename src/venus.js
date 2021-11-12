export function Venus(age, lifeExpectancy) {
  this.age = age;
  this.lifeExpectancy = lifeExpectancy;
};

Venus.prototype.calculateVenusAge = function() {
  let venusAge = (this.age * 365)/225;
  return venusAge;
};

Venus.prototype.lifeExpVenus = function() {
  let lifeExpVen = this.lifeExpectancy - (this.age * 365)/225;
  return Math.abs(lifeExpVen);
};

