
function JogarDados() {
    var lados = elemento("Lados").value;
    var quantosDados = elemento("ValorDeDados").value;

    if (lados < 6 || lados > 1000) {
        alert("Você so pode escolher um numero de 6 a 1000 lados");
        elemento("Lados").value = " ";

    } else {

        elemento("resultadosDosDados").innerHTML = "";
        for (var i = 1; i <= quantosDados; i++) {

            elemento("resultadosDosDados").innerHTML += "<h1>Dado "+i+": <span>"+getRandomNumber(lados)+"</span><br></h1>";           

        }
        
    }
}

function elemento(name) {
    return document.getElementById(name);
}

//funcao com sobrecarga
function getRandomNumber(numerosDeLados) {
    return Math.floor(Math.random() * numerosDeLados +1);
}



    /*
    if (quantosDados == 1) {

        var randow1 = getRandomNumber(lados);
        elemento("numero1").innerHTML = randow1;

    } else if (quantosDados == 2) {
        var randow1 = getRandomNumber(lados);
        var randow2 = getRandomNumber(lados);
        elemento("numero1").innerHTML = randow1;
        elemento("numero2").innerHTML = randow2;

    } else if (quantosDados == 3) {
        var randow1 = getRandomNumber(lados);
        var randow2 = getRandomNumber(lados);
        var randow3 = getRandomNumber(lados);
        elemento("numero1").innerHTML = randow1;
        elemento("numero2").innerHTML = randow2;
        elemento("numero3").innerHTML = randow3;

    } else if (quantosDados == 4) {
        var randow1 = getRandomNumber(lados);
        var randow2 = getRandomNumber(lados);
        var randow3 = getRandomNumber(lados);
        var randow4 = getRandomNumber(lados);
        elemento("numero1").innerHTML = randow1;
        elemento("numero2").innerHTML = randow2;
        elemento("numero3").innerHTML = randow3;
        elemento("numero4").innerHTML = randow4;

    } else if (quantosDados == 5) {
        var randow1 = getRandomNumber(lados);
        var randow2 = getRandomNumber(lados);
        var randow3 = getRandomNumber(lados);
        var randow4 = getRandomNumber(lados);
        var randow5 = getRandomNumber(lados);
        elemento("numero1").innerHTML = randow1;
        elemento("numero2").innerHTML = randow2;
        elemento("numero3").innerHTML = randow3;
        elemento("numero4").innerHTML = randow4;
        elemento("numero5").innerHTML = randow5;

    } else if (quantosDados == 6) {
        var randow1 = getRandomNumber(lados);
        var randow2 = getRandomNumber(lados);
        var randow3 = getRandomNumber(lados);
        var randow4 = getRandomNumber(lados);
        var randow5 = getRandomNumber(lados);
        var randow6 = getRandomNumber(lados);
        elemento("numero1").innerHTML = randow1;
        elemento("numero2").innerHTML = randow2;
        elemento("numero3").innerHTML = randow3;
        elemento("numero4").innerHTML = randow4;
        elemento("numero5").innerHTML = randow5;
        elemento("numero6").innerHTML = randow6;
    }
    */

/*
- ok - Deverá ser possivel escolher o tipo de dado. O dado começa com 6 lados e vai até 1000 lados.
- ok - Deverá ser possivel escolher até 6 dados (do mesmo tipo) jogados de uma vez so.
- ok - botao para jogar os dados. E o botao deve permanecer na tela para que seja possivel jogar novamente
- ok - deverá mostrar o resultado dos dados jogados na tela
*/

/*

    var dado1 = elemento("numero1").value
    var dado2 = elemento("numero2").value
    var dado3 = elemento("numero3").value
    var dado4 = elemento("numero4").value
    var dado5 = elemento("numero5").value
*/