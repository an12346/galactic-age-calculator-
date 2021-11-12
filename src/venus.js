export function Venus(age) {
  this.age = age;
};

Venus.prototype.calculateVenusAge = function() {
  let venusAge = (this.age * 365)/225;
  return venusAge;
};

Venus.prototype.lifeExpVenus = function() {
  let lifeExpVen = 100 - (this.age * 365)/225;
  return Math.abs(lifeExpVen);
};

