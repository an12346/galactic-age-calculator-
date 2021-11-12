export default function Mercury(age) {
  this.age = age;
}

Mercury.prototype.calculateMerAge = function() {
  let mercuryYears = (this.age * 365)/88;
  return mercuryYears;
};