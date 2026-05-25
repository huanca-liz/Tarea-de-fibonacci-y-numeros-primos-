// FIBONACCI
function calcularFibo(event) {
    event.preventDefault();

    let n = document.getElementById("fiboNum").value;
    let a = 0,
        b = 1;
    let resultado = "";

    for (let i = 0; i < n; i++) {
        resultado += a + " ";
        let siguiente = a + b;
        a = b;
        b = siguiente;
    }

    document.getElementById("resultadoFibo").innerText = resultado;
}

// PRIMOS
function verificarPrimo(event) {
    event.preventDefault();

    let num = document.getElementById("primoNum").value;
    let esPrimo = true;

    if (num <= 1) {
        esPrimo = false;
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                esPrimo = false;
                break;
            }
        }
    }

    document.getElementById("resultadoPrimo").innerText =
        esPrimo ? "Es primo ✅" : "No es primo ❌";
}