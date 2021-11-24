const bancoDeFuncionarios = []


document.querySelector('#adicionar').addEventListener('click', (e) => {
    e.preventDefault()
    bancoDeFuncionarios.push(cadastrarFuncionario())

})


function cadastrarFuncionario (){
    const nome = document.getElementById('nome').value.toUpperCase() //vai pegar o nome 
    const salarioPorHora = getInputNumberValue('salarioPorHora');
    const horasTrabalhada = getInputNumberValue('horasTrabalhada')

    const salarioTotal = salario(horasTrabalhada, salarioPorHora)

    return{
        nome,
        horasTrabalhada,
        salarioPorHora,
        salarioTotal
    }

}

function salario(horasTrabalhada, salarioPorHora){
    if(horasTrabalhada > 160){
        console.log(calcularSalarioComExtra(horasTrabalhada, salarioPorHora))
        return
    }
    console.log(calcularSalarioSemExtra(horasTrabalhada, salarioPorHora))
    return
}

function calcularSalarioComExtra(horasTrabalhada, salarioPorHora){
    let extra = (horasTrabalhada - 160) * (salarioPorHora * 1.50)
    let salario = 160 * salarioPorHora

    return salario + extra
}

function calcularSalarioSemExtra(horasTrabalhada, salarioPorHora){
    return horasTrabalhada * salarioPorHora
}


//reponsavel em pegar os valores 
function getInputNumberValue(id){
    return Number(document.getElementById(id).value)
}

// quando clicar no botão vai executar a função fatorial()
document.querySelector('button').addEventListener('click', (e) =>{
    e.preventDefault
    salario()
})