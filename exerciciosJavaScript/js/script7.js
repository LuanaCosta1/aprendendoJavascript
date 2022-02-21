"use strict";

function imc() {
    var alt = parseFloat(document.querySelector("#altura").value);
    var ps = parseFloat(document.querySelector("#peso").value);
    var imc = (ps / (alt * alt));

    if (document.getElementsByName('opc')[0].checked) {  

        if (imc < 20.7) {
            var cond = "Abaixo do peso";
        }
        else if (imc >= 20.7 && imc < 26.4) {
            var cond = "Peso normal";
        }
        else if (imc >= 26.4 && imc < 27.8) {
            var cond = "Marginalmente acima do peso";
        }
        else if (imc >= 27.8 && imc < 31.1) {
            var cond = "Acima do peso ideal";
        }
        else if (imc >= 31.1) {
            var cond = "Obeso";
        }
    }
    if (document.getElementsByName('opc')[1].checked) {  
        if (imc < 19.1) {
            var cond = "Abaixo do peso";
        }
        else if (imc >= 19.1 && imc < 25.8) {
            var cond = "Peso normal";
        }
        else if (imc >= 25.8 && imc < 27.3) {
            var cond = "Marginalmente acima do peso";
        }
        else if (imc >= 27.3 && imc < 32.3) {
            var cond = "Acima do peso ideal";
        }
        else if (imc >= 32.3) {
            var cond = "Obeso";
        }
    }

    document.querySelector("#resultado7").value = "IMC = " + (imc.toFixed(1)) + ", " + cond;
}