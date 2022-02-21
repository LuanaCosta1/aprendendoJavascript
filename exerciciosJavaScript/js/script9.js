"use strict";


function calcAdic() {
    var num1 = parseFloat(document.querySelector("#n1").value);
    var num2 = parseFloat(document.querySelector("#n2").value);
    var res = num1 + num2;
    document.querySelector("#resultado9").value = res;
}

function calcSub() {
    var num1 = parseFloat(document.querySelector("#n1").value);
    var num2 = parseFloat(document.querySelector("#n2").value);
    var res = num1 - num2;
    document.querySelector("#resultado9").value = res;
}

function calcMul() {
    var num1 = parseFloat(document.querySelector("#n1").value);
    var num2 = parseFloat(document.querySelector("#n2").value);
    var res = num1 * num2;
    document.querySelector("#resultado9").value = res;
}

function calcDiv() {
    var num1 = parseFloat(document.querySelector("#n1").value);
    var num2 = parseFloat(document.querySelector("#n2").value);
    var res = num1 / num2;
    document.querySelector("#resultado9").value = res;
}