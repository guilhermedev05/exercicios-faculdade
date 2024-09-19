const saida = document.querySelector('#areaSaida')
let palavra

document.querySelector('#maiuscula').addEventListener('click', () => {
    palavra = document.querySelector('#palavra').value
    saida.innerHTML = palavra.toUpperCase()
})
document.querySelector('#separar').addEventListener('click', () => {
    saida.innerHTML = ''
    palavra = document.querySelector('#palavra').value
    let letras = palavra.split(' ')
    for(let i = 0; i < letras.length; i++){
        saida.innerHTML += `${letras[i]}<br>`
    }
})