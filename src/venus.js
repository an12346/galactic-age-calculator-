export class Venus {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  };

  calculateVenusAge() {
    let venusAge = (this.age * 365)/225;
    return venusAge;
  };

  lifeExpVenus() {
    let lifeExpVen = this.lifeExpectancy - (this.age * 365)/225;
    return Math.abs(lifeExpVen);
  };

};
