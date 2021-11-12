import { test } from 'media-typer';
import { describe } from 'yargs';
import Mercury from './../src/js/mercury.js';


describe("Mercury", () => {

  test("should calculate the number of Mercury years from one Earth year", () => {
    const mercuryYears = new Mercury(.24);
    expect(mercuryYears.years).toEqual(.24);
  });
});