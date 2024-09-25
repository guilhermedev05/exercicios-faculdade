let area = document.querySelector('.area')
let areaSlide = document.querySelector('.slide-show')
let fotoArea = document.querySelector('.foto-area')
let intervalId;

document.querySelectorAll('.seletor').forEach((seletor) => {
    seletor.addEventListener('click', (e) => {
        let abaSelecionada = e.target.innerHTML.toLowerCase();
        if (abaSelecionada == 'cronômetro') {
            area.innerHTML = ''
            clearInterval(intervalId)
            cronometro()
        } else if (abaSelecionada == 'slide show') {
            clearInterval(intervalId)
            slideShow()
        } else if (abaSelecionada == 'tabuada'){
            clearInterval(intervalId)
            tabuada()
        }
    });
});

function cronometro() {
    let numero = 1;
    document.querySelector('.area').innerHTML = numero;

    intervalId = setInterval(() => {
        numero++
        document.querySelector('.area').innerHTML = numero;
    }, 1000)
}

function slideShow() {
    area.innerHTML = ''
    area.appendChild(areaSlide)
    areaSlide.style.display = 'block'
    fotoArea.innerHTML = ''
    
    let i = 1
    let img = document.createElement('img')
    img.src = 'assets/images/image1.png'
    fotoArea.appendChild(img)
    const proximaFoto = document.querySelector('#proximaFoto')
    proximaFoto.addEventListener('click', () => {
        fotoArea.innerHTML = ''
        if(i == 5){
            i = 0
        }
        i++
        img.src = `assets/images/image${i}.png`
        fotoArea.prepend(img)
    })
    const fotoAnterior = document.querySelector('#fotoAnterior')
    fotoAnterior.addEventListener('click', () => {
        fotoArea.innerHTML = ''
        if(i == 1){
            i = 5
        }
        i--
        img.src = `assets/images/image${i}.png`
        fotoArea.prepend(img)
    }) 
}

function tabuada(){
    area.innerHTML = ''
    area.innerHTML = 
    `
        <span>Digite o número da tabuada que deseja calcular</span> <br>
        <input type="text" id="numero"> <button id="calcular">Calcule</button>
        <div class="resultado"></div>
    `
    let resultado = document.querySelector('.resultado')
    document.querySelector('#calcular').addEventListener('click', () => {
        resultado.innerHTML = ''
        let numero = document.querySelector('#numero').value
        for(let i = 1; i <= 10; i++){
            document.querySelector('.resultado').innerHTML += 
            `
                ${numero} x ${i} = ${numero * i} <br>
            `
        }
    })
}