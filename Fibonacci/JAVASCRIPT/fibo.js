function calcularFibo() {
    let n = parseInt(document.getElementById("numero").value);

    let a = 0;
    let b = 1;
    let resultado = "";

    for (let i = 0; i < n; i++) {
        resultado += a + " ";
        let c = a + b;
        a = b;
        b = c;
    }

    document.getElementById("resultado").innerHTML = resultado;
}