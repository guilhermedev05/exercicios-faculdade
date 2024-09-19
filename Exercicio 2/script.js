let linhas = Number(prompt('Insira a quantidade de linhas da tabela'));
let colunas = Number(prompt('Insira a quantidade de colunas da tabela'));
let tabela = document.querySelector('table');

for (let i = 0; i < linhas; i++) {
    let linha = document.createElement('tr');
    for (let j = 0; j < colunas; j++) {
        let coluna = document.createElement('td');
        linha.appendChild(coluna);
    }
    tabela.appendChild(linha);
}

document.querySelectorAll('tr').forEach((linha, linhaIndex) => {
    let colunas = linha.querySelectorAll('td');
    colunas.forEach((coluna, colunaIndex) => {
        coluna.innerHTML = `${linhaIndex + 1},${colunaIndex + 1}`;
    });
});
