let nome = prompt("Digite seu primeiro nome:");

while (nome === "" || nome === null) {
    alert("O nome não pode ficar em branco!");
    nome = prompt("Digite seu primeiro nome:");
}

let sobrenome = prompt("Digite seu sobrenome:");

while (sobrenome === "" || sobrenome === null) {
    alert("O sobrenome não pode ficar em branco!");
    sobrenome = prompt("Digite seu sobrenome:");
}

alert(`Nome completo: ${nome} ${sobrenome}`);