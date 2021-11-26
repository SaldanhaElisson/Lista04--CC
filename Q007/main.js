const bancoDeDados = []

document.querySelector('#adicionar').addEventListener('click', (e) => {
    e.preventDefault()

    bancoDeDados.push(adicionar())

})

document.querySelector('#mostarResultado').addEventListener('click', (e) => {
    e.preventDefault()

    innerResultado()

})

function adicionar(){
    const nome  = document.querySelector('.nome').value
    const salario = Number(document.querySelector('#salario').value)
    const filhos = Number(document.querySelector('#filho').value)

    return{
        nome, 
        salario,
        filhos
    }
}

function media(valor){
    let resultado = 0
    bancoDeDados.forEach((element) => {
        resultado += element[valor] 
    })
    console.log(resultado)
    return (resultado / bancoDeDados.length).toFixed(2)
}

function percentual(){
    let menorQue100 = 0;
    
    bancoDeDados.forEach((e)=>{
        if(e.salario < 1000){
            menorQue100 += 1
        }
    })

    return ((menorQue100/bancoDeDados.length) * 100).toFixed(2)
}

function innerResultado(){
    const resultado = document.querySelector('.resultado')
    const p = document.createElement('p')
    
    const mediaDoSalario = media('salario')
    const mediaDosFilhos = media('filhos')
    const percentualMenorQue100 = percentual()
    p.innerHTML = `Media dos Filhos: ${mediaDosFilhos} ; Media dos Salarios: ${mediaDoSalario}; 
    Percentual de pessoas com salario menor que r$ 1000,00: ${percentualMenorQue100}%`

    resultado.appendChild(p)
}