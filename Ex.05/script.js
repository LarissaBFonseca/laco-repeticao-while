let saldo = 1000; 

let valor = parseFloat(prompt(`Saldo atual: ${saldo}\nDigite o valor do saque:`));

while (saldo > 0) {
    if (isNaN(valor) || valor <= 0) {
        alert("Digite um valor válido para saque!");
    } else if (valor > saldo) {
        alert("Saldo insuficiente!");
    } else {
        saldo -= valor;
        alert(`Saque realizado! Saldo restante: ${saldo}`);
    }

    if (saldo <= 0) {
        break;
    }

    valor = parseFloat(prompt(`Saldo atual: ${saldo}\nDigite outro valor de saque:`));
}

alert("Operação encerrada.");