export function Mars(age) {
this.age = age;
};

Mars.prototype.calculateMarsAge = function() {
  let marsAge = (this.age * 365)/687;
  return marsAge;
}