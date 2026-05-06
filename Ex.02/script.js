let soma = 0;
let contador = 0;

let nota = parseFloat(prompt("Digite uma nota (negativo para parar):"));

while (nota >= 0) {
    if (isNaN(nota) || nota > 10) {
        alert("Digite uma nota válida entre 0 e 10!");
    } else {
        soma += nota;
        contador++;
    }

    nota = parseFloat(prompt("Digite outra nota (negativo para parar):"));
}

if (contador > 0) {
    let media = soma / contador;
    alert(`A média das notas é: ${media}`);
} else {
    alert("Nenhuma nota válida foi digitada.");
}