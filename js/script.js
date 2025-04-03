// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Ms Raffin
// Created on: Sep 2022
// This file contains the JS functions for index.html
"use strict";

// This function calculates the gross pay, government take, and net pay
function hoursWorked() {
  // input
  let hoursWorked = parseFloat(document.getElementById("hours-worked").value);
  let hourlyRate = parseFloat(document.getElementById("hourly-rate").value);
    const TAX = 20.05;
  // process
  let grossPay = hoursWorked * hourlyRate;
  let govTake = grossPay * (TAX / 100);
  let netPay = grossPay - govTake;
  // output
  document.getElementById("gross-pay").innerHTML = "Gross Pay: $" + grossPay.toFixed(2);
  document.getElementById("gov-take").innerHTML = "Government Take: $" + govTake.toFixed(2);
  document.getElementById("net-pay").innerHTML = "Net Pay: $" + netPay.toFixed(2);
} 