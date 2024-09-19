let corpoTabela = document.querySelector('tbody');
let nomes = [];

while (true) {
    let nome = prompt('Digite seu nome');
    if (nome === null) {
        break;
    } else {
        nomes.push(nome)
    }
}


for (let i = 0; i < nomes.length; i++) {
    let linhaTabela = corpoTabela.insertRow();
    let indice = linhaTabela.insertCell(0);
    let nome = linhaTabela.insertCell(1)
    indice.innerHTML = i+1;
    nome.innerHTML = nomes[i]
}
