export function Venus(age) {
  this.age = age;
};

Venus.prototype.calculateVenusAge = function() {
  let venusAge = (this.age * 365)/225;
  return venusAge;
};



