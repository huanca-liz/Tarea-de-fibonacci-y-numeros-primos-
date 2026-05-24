function verificarPrimo() {
    let numero = parseInt(document.getElementById("numero").value);
    let contador = 0;

    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            contador++;
        }
    }

    if (contador === 2) {
        document.getElementById("resultado").innerHTML = "Es primo";
    } else {
        document.getElementById("resultado").innerHTML = "No es primo";
    }
}