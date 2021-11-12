import { Mercury } from '../src/mercury.js';


describe("Mercury", () => {

  test("should calulate Mercury age from Earth age", () => {
    let merAge = new Mercury(23);
    expect(merAge.calculateMerAge()).toEqual(95.39772727272727);
  });

  test("should calculate an estimated remaining years to live on Mercury", () => {
    let m = new Mercury(23);
    expect(m.lifeExpMerc()).toEqual(6);
  });
});

