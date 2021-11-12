import { Jupiter } from '../src/jupiter.js';

describe("Jupiter", () => {

  test("should calulate Jupiter age from Earth age", () => {
    let jupAge = new Jupiter(50);
    expect(jupAge.calculateJupiterAge()).toEqual(4.166666666666667);
  });
});