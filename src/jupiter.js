export class Jupiter {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy
  };

  calculateJupiterAge() {
    let jupiterAge = (this.age * 365)/4380;
    return jupiterAge;
  };

  lifeExpJupiter() {
    let lifeExpJup = this.lifeExpectancy - (this.age * 365)/4380;
    return Math.abs(lifeExpJup);
  };

};