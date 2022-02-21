"use strict";



function calcularJuros() {
    var vT = parseFloat(document.querySelector("#valorT").value);
    var qP = parseInt(document.querySelector("#qtdeP").value);

    var juros = 0;
    var res = 0;
    
    if (qP == 1) {
        res = vT;
    }
    else if (qP == 2){
        juros = vT + ((3 * vT)/ 100);
        res = (juros / qP);
    }
    else if (qP == 4){
        juros = vT + ((7 * vT)/ 100);
        console.log(juros)
        res = (juros / qP);
    }
    else if (qP <= 0){
        res = "Quantidade de parcelas inválidas!";
    }
    else {
        juros = vT + ((qP * vT)/ 100)
        res = (juros / qP);
    }

    document.querySelector("#resultado1").value = (res.toFixed(2)) + " R$";
}
