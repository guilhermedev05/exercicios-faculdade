/*
    Ao clicar no botão Cadastrar:
        • Estando todos os campos preenchidos, grave os dados em vetores para cada informação do
        aluno, ou seja, um vetor para rgms, um para nomes, um para notas_p, um para notas_exer, um
        para notas_proj e um para notas_reg.
        • Ao gravar os dados, limpe os campos do formulário.

    • Ao clicar no botão Mostrar:
        • exiba todos os dados dos vetores em uma tabela, um registro de aluno por linha
        • para cada aluno acrescente uma coluna com o cálculo da nota final, para isso faça uma função
        que receba as notas como parâmetros e retorne a soma das 4 notas.
        • Adicione outra coluna com o conceito (Aprovado, Reprovado ou Avaliação Final) conforme os
        critérios da Universidade, você deverá chamar uma função que retorne o conceito do aluno
        conforme sua nota final.

    • Formate o valor da média final e do conceito com CSS.
    '• Ex: Aprovado; Reprovado; Avaliação Final;'
*/

let nomes = []
let rgms = []
let notasParcial = []
let notasExercicios = []
let notasProjetos = []
let notasRegimentais = []
let erro = []
document.querySelector("#cadastro").addEventListener("click", () => {
    let inputValue = []
    document.querySelectorAll('input').forEach(item => {
        inputValue.push(item.value)
    })


    if(inputValue.includes('')){
        alert('Preencha todos os campos!')
    }else{
        
        if(document.querySelector("#name").value != '' || document.querySelector("#name").value != ' ' ){
            let letraMaiuscula = document.querySelector("#name").value.charAt(0).toUpperCase()
            let nomeCompleto = letraMaiuscula + document.querySelector("#name").value.slice(1)
            nomes.push(nomeCompleto)
        }else{
            erro.push('erro')
            nomes.push('erro')
            alert('Nome inválido!')
        }
        if(document.querySelector("#rgm").value.length >= 1){
            console.log(document.querySelector("#rgm").value.length)
            rgms.push(document.querySelector("#rgm").value)
        }else{
            erro.push('erro')
            rgms.push('erro')
            alert('Digite no minímo 1 digíto no RGM')
        }
        if(parseFloat(document.querySelector("#nota-parcial").value) >= 0 && parseFloat(document.querySelector("#nota-parcial").value) <= 2.5){
            notasParcial.push(parseFloat(document.querySelector("#nota-parcial").value))
        }else{
            erro.push('erro')
            notasParcial.push('erro')
            alert('Nota parcial inválida!\nDigite a nota entre 0 e 2,5')
        }
        if(parseFloat(document.querySelector("#nota-projetos").value) >= 0 && parseFloat(document.querySelector("#nota-projetos").value) <= 2){
            notasProjetos.push(parseFloat(document.querySelector("#nota-projetos").value))
        }else{
            erro.push('erro')
            notasProjetos.push('erro')
            alert('Nota de projetos inválida!\nDigite a nota entre 0 e 2,0')
        }
        if(parseFloat(document.querySelector("#nota-exercicios").value) >= 0 && parseFloat(document.querySelector("#nota-exercicios").value) <= 0.50){
            notasExercicios.push(parseFloat(document.querySelector("#nota-exercicios").value))
        }else{
            erro.push('erro')
            notasExercicios.push('erro')
            alert('Nota de exercicios inválida!\nDigite a nota entre 0 e 0,5')
        }
        if(parseFloat(document.querySelector("#nota-regimental").value) >= 0 && parseFloat(document.querySelector("#nota-regimental").value) <= 5){
            notasRegimentais.push(parseFloat(document.querySelector("#nota-regimental").value))
        }else{
            erro.push('erro')
            notasRegimentais.push('erro')
            alert('Nota regimental inválida!\nDigite a nota entre 0 e 5')
        }
        
        
        if(erro.length > 0){
            alert('Insira as informações corretas nos campos!')
            erro = []
            nomes.pop()
            rgms.pop()
            notasExercicios.pop()
            notasParcial.pop()
            notasProjetos.pop()
            notasRegimentais.pop()
            console.log(nomes,rgms,notasExercicios, notasParcial, notasProjetos, notasRegimentais)
        }else{
            document.querySelector("#name").value = ''
            document.querySelector("#rgm").value = ''
            document.querySelector("#nota-parcial").value = ''
            document.querySelector("#nota-projetos").value = ''
            document.querySelector("#nota-exercicios").value = ''
            document.querySelector("#nota-regimental").value = ''
        }
        console.log(notasExercicios, notasParcial, notasProjetos, notasRegimentais)
    }
})

document.querySelector("#mostrar-dados").addEventListener("click", () => {
    let areaDados = document.querySelector(".dados")
    areaDados.style.display = 'block'
    setTimeout(() => {
        areaDados.style.opacity = 1
    }, 200)
    let corpoTabela = areaDados.querySelector(".corpo-tabela")
    for(let i in nomes){
        
        corpoTabela.innerHTML += `
            <tr>
                <td>${nomes[i]}</td>
                <td>${rgms[i]}</td>
                <td>${notaFinal(notasParcial[i], notasExercicios[i], notasProjetos[i], notasRegimentais[i])}</td>
                <td class="conceito" data-index="${i}">${conceito(notaFinal(notasParcial[i], notasExercicios[i], notasProjetos[i], notasRegimentais[i]))}</td>
            </tr>
    `
    }
    document.querySelectorAll('.conceito').forEach(conceito => {
        switch(conceito.innerHTML.toLowerCase()){
            case 'aprovado': conceito.style.color = 'green'
            break
            case 'reprovado': conceito.style.color = 'red'
            break
            case 'avaliação final': conceito.style.color = 'rgb(255, 145, 0)'
            break
        }
    })

    nomes = []
    rgms = []
    notasParcial = []
    notasExercicios = []
    notasProjetos = []
    notasRegimentais = []
})

function notaFinal(notaParcial, notaExercicios, notaProjetos, notaRegimental){
    let a1 = notaRegimental
    let a2 = notaParcial + notaExercicios + notaProjetos
    let notaFinal = a1+a2
    return notaFinal
}

function conceito(notaFinal){
    if(notaFinal >= 6){
        return "Aprovado"
    }else if(notaFinal >= 3 && notaFinal < 6){
        return "Avaliação final"
    }else{
        return "Reprovado"
    }
}