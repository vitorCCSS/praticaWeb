function validaProc() {
    const numero = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');

    resultado.innerHTML = ""; // limpa resultado anterior

    if (numero === "") {
        alert("Por favor, insira um número.");
        return false;
    }

    let n = parseInt(numero);
    let saida = "<h3>Tabuada do " + n + ":</h3>";

    for (let i = 1; i <= 10; i++) {
        saida += `${n} x ${i} = ${n * i}<br>`;
    }

    resultado.innerHTML = saida;

    return false; // impede envio do formulário
}
