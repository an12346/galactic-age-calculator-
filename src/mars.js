export default class Mars {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }

  calculateMarsAge() {
    let marsAge = (this.age * 365)/687;
    return marsAge;
  }

  lifeExpMars() {
    let lifeExpMar = this.lifeExpectancy - (this.age * 365)/687;
    return Math.abs(lifeExpMar);
  }

}