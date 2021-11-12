import { Jupiter } from '../src/jupiter.js';

describe("Jupiter", () => {

  test("should calulate Jupiter age from Earth age", () => {
    let jupAge = new Jupiter(50);
    expect(jupAge.calculateJupiterAge()).toEqual(4.166666666666667);
  });

  test("should calculate an estimated remaining years to live on Jupiter", () => {
    let jup = new Jupiter(50, 100);
    expect(jup.lifeExpJupiter()).toEqual(95.83333333333333);
  });
});