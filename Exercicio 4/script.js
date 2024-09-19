const visor = document.querySelector('.visor-input')
let calculo = []
let operadores = []
let numeros = []
document.querySelectorAll('.calc-botao').forEach(item => {
    
    item.addEventListener('click', () => {
        if(item.innerHTML.toLowerCase() != 'c'){
            if(item.innerHTML != '.'){
                visor.value += Number(item.innerHTML)
                calculo.push(Number(item.innerHTML)) 
            }else{
                visor.value += item.innerHTML
                let ultimoNumero = calculo[calculo.length - 1]
                calculo.pop()
                calculo.push(ultimoNumero + item.innerHTML)
            }
        }else{
            calculo = []
            numeros = []
            visor.value = ''
        }
        console.log(calculo)
    })
})

document.querySelectorAll('.calc-botao-op').forEach(item => {
    item.addEventListener('click', () => {
        visor.value += item.innerHTML 
        calculo.push(item.innerHTML)
    })
})

document.querySelector('.calc-botao-res').addEventListener('click', () => {
    operadores = calculo.map(item => {
        return typeof(item) == 'number' ? '' : calculo.indexOf(item)
    })
    operadores = operadores.filter(item => {
        return typeof(item) == 'number' ? item : ''
    })
    for(let i in operadores){
        numeros.push(Number(calculo.slice(0,operadores[i]).join('')))
        numeros.push(Number(calculo.slice(operadores[i] + 1, calculo.length).join('')))
        console.log(operadores)
    }
    visor.value = ''
    visor.value = calcular(numeros[0], numeros[1])
    calculo = []
    numeros = []
    calculo.push(Number(visor.value))
})

function calcular(x,y){
    if(operadores.length > 1){
        let resultado = 0
        for(let i of operadores){
            if(calculo[i] == '+'){
                console.log('entrou')
                resultado += x + y
            }
        }
        return resultado
    }
    if(calculo[operadores[0]] == '+'){
        return x+y
    }else if(calculo[operadores[0]] == '-'){
        return x-y
    }else if(calculo[operadores[0]] == 'x'){
        return x*y
    }else if(calculo[operadores[0]] == '÷'){
        return x/y
    }
}