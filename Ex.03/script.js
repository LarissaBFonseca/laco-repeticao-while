let total = 0;

let valor = parseFloat(prompt("Digite o valor da compra (0 para finalizar):"));

while (valor !== 0) {
    if (isNaN(valor) || valor < 0) {
        alert("Digite um valor válido!");
    } else {
        total += valor;
    }

    valor = parseFloat(prompt("Digite outro valor (0 para finalizar):"));
}

alert(`O total da compra é: ${total}`);