import { Mars } from '../src/mars.js';

describe("Mars", () => {

  test("should calulate Mars age from Earth age", () => {
    let marAge = new Mars(30);
    expect(marAge.calculateMarsAge()).toEqual(15.93886462882096);
  });

  test("should calculate an estimated remaining years to live on Mars", () => {
    let mar = new Mars(30);
    expect(mar.lifeExpMars()).toEqual(1);
  });
});