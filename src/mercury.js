export function Mercury(age) {
  this.age = age;
};

Mercury.prototype.calculateMerAge = function() {
  let mercuryAge = (this.age * 365)/88;
  return mercuryAge;
};

//Mercury.prototype.lifeExpMercury = function() {
  //let lifeExpMerc = (100 - (this.age * 365)/88);
  //return lifeExpMerc;
//};