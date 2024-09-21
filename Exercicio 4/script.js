const visor = document.querySelector('.visor-input');
let numeroAtual = '';
let numeroAntigo = '';
let operadorAtual = '';

document.querySelectorAll('.calc-botao').forEach(item => {
    item.addEventListener('click', () => {
        if (item.innerHTML.toLowerCase() !== 'c') {
            if (item.innerHTML !== '.' || !numeroAtual.includes('.')) {
                visor.value += item.innerHTML;
                numeroAtual += item.innerHTML;
            }
        } else {
            numeroAtual = '';
            numeroAntigo = '';
            operadorAtual = '';
            visor.value = '';
        }
    });
});

document.querySelectorAll('.calc-botao-op').forEach(item => {
    item.addEventListener('click', () => {
        if (numeroAtual && numeroAntigo) {
            numeroAtual = calcular(numeroAntigo, numeroAtual, operadorAtual);
        }
        console.log(numeroAntigo)
        operadorAtual = item.innerHTML;
        numeroAntigo = numeroAtual;
        console.log(numeroAntigo)
        numeroAtual = '';
        visor.value += ` ${operadorAtual} `;
    });
});

document.querySelector('.calc-botao-res').addEventListener('click', () => {
    if (numeroAtual && numeroAntigo && operadorAtual) {
        numeroAtual = calcular(numeroAntigo, numeroAtual, operadorAtual);
        visor.value = numeroAtual;
        numeroAntigo = '';
        operadorAtual = '';
    }
});

// Função para realizar os cálculos
function calcular(num1, num2, op) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    switch (op) {
        case '+':
            return (num1 + num2).toString();
        case 'x':
            return (num1 * num2).toString();
        case '-':
            return (num1 - num2).toString();
        case '÷':
            return (num1 / num2).toString();
        default:
            return num2;
    }
}