import { Mercury } from '../src/mercury.js';


describe("Mercury", () => {

  test("should calulate Mercury age from Earth age", () => {
    let merAge = new Mercury(23);
    expect(merAge.calculateMerAge()).toEqual(95.4);
  });
});