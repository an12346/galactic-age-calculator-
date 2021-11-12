import { Venus } from '../src/venus.js';

describe("Venus", () => {

  test("should calulate Venus age from Earth age", () => {
    let venAge = new Venus(23);
    expect(venAge.calculateVenusAge()).toEqual(37.31111111111111);
  });
});