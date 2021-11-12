export class Mercury {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  };

  calculateMerAge() {
    let mercuryAge = (this.age * 365)/88;
    return mercuryAge;
  };

  lifeExpMercury() {
    let lifeExpMerc = this.lifeExpectancy - (this.age * 365)/88;
    return Math.abs(lifeExpMerc);
  };

};