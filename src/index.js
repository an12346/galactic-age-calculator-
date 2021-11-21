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
  let ageResult = mercury.calculateMerAge();

  let merExp = $("#mercury-exp").val();
  let mercuryExp = new Mercury(merExp);
  let expResult = mercuryExp.lifeExpMercury();

  $("#age-results").append(`<p> Your age on Mercury is ${ageResult} years old </p>`);
  $("#exp-results").append(`<p> You have ${expResult} more years on Mercury </p>`);
});

$("#venus-form").submit(function(event) {
  event.preventDefault();
  let venAge = $("#venus-age").val();
  let venus = new Venus(venAge);
  let ageResult = venus.calculateVenusAge();

  let venExp = $("#venus-exp").val();
  let venusExp = new Venus (venExp);
  let expResult = venusExp.lifeExpVenus();

  $("#age-results").append(`<p> Your age on Venus is ${ageResult} years old </p>`);
  $("#exp-results").append(`<p> You have ${expResult} more years on Venus </p>`);
});

$("#mars-form").submit(function(event) {
  event.preventDefault();
  let marsAge = $("#mars-age").val();
  let mars = new Mars(marsAge);
  let ageResult = mars.calculateMarsAge();

  let marExp = $("#mars-exp").val();
  let marsExp = new Mars (marExp);
  let expResult = marsExp.lifeExpMars();

  $("#age-results").append(`<p> Your age on Mars is ${ageResult} years old </p>`);
  $("#exp-results").append(`<p> You have ${expResult} more years on Mars </p>`);
});

$("#jupiter-form").submit(function(event) {
  event.preventDefault();
  let jupAge = $("#jupiter-age").val();
  let jupiter = new Jupiter(jupAge);
  let ageResult = jupiter.calculateJupiterAge();

  let jupExp = $("#jupiter-exp").val();
  let jupiterExp = new Jupiter(jupExp);
  let expResult = jupiterExp.lifeExpJupiter();

  $("#age-results").append(`<p> Your age on Jupiter is ${ageResult} years old </p>`);
  $("#exp-results").append(`<p> You have ${expResult} more years on Jupiter </p>`);
});






