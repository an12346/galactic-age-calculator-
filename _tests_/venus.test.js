import { Venus } from '../src/venus.js';

describe("Venus", () => {

  test("should calulate Venus age from Earth age", () => {
    let venAge = new Venus(23);
    expect(venAge.calculateVenusAge()).toEqual(37.31111111111111);
  });

  test("should calculate an estimated remaining years to live on Venus", () => {
    let ven = new Venus(23, 100);
    expect(ven.lifeExpVenus()).toEqual(62.68888888888889);
  });
});