"use strict";

function condPag() {
    var precoP = parseFloat(document.querySelector("#preco").value);
    var precoJ = 0;
    var juros = 0;

    if (document.getElementsByName('opc')[0].checked) {  
        juros = precoP * (10/100);
        precoJ = precoP - juros;
    }  
    else if (document.getElementsByName('opc')[1].checked) {  
        juros = precoP * (5/100);
        precoJ = precoP - juros;
    }  
    else if (document.getElementsByName('opc')[2].checked) {  
        juros = precoP * (10/100);
        precoJ = precoP + juros;
    }

    document.querySelector("#resultado6").value = "Valor total do produto = " + (precoJ.toFixed(2)) + "R$";
}