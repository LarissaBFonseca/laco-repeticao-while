let numero = parseInt(prompt("Digite um número positivo:"));

while (isNaN(numero) || numero < 0) {
    alert("Valor inválido! Digite um número positivo.");
    numero = parseInt(prompt("Digite um número positivo:"));
}

alert(`Número válido digitado: ${numero}`);