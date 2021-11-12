import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Mercury from '../src/mercury.js';
import Venus from '../src/venus.js';
import Mars from '../src/mars.js';
import Jupiter from '../src/jupiter.js';


$("#mercury-form").submit(function(event) {
  event.preventDefault();
  let merAge = $("#mercury-age").val();
  let mercury = new Mercury(merAge);
  let result = mercury.calculateMerAge();
  $("#results").append(`<p>${result}</p>`);
});

