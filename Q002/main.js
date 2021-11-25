const bancoDeFuncionarios = []

// Botões responsavel por  executar as funções 
document.querySelector('#adicionar').addEventListener('click', (e) => {
    e.preventDefault()
    bancoDeFuncionarios.push(cadastrarFuncionario())
    console.log(bancoDeFuncionarios)

})

document.querySelector('#criarTabela').addEventListener('click', (e) => {
    e.preventDefault()
    criarTabela()
    
})

document.querySelector('#limparTabela').addEventListener('click', (e) =>{
    location.reload()
})

// função responsavel em pegar os campos e retorna um objeto com os dados dos funcionariso
function cadastrarFuncionario (){
    const nome = document.getElementById('nomeDoFuncionario').value.toUpperCase() //vai pegar o nome 
    const salarioPorHora = getInputNumberValue('salarioPorHora');
    const horasTrabalhada = getInputNumberValue('horasTrabalhada')


    // calculando o salario total do funcionario
    const salarioTotal = salario(horasTrabalhada, salarioPorHora)

    // verificando se já existe o nome do funcionario no BancodeFuncionarios
    if(validando(bancoDeFuncionarios, nome)){
        alert(`${nome}já existe`)
        return
    }

    document.getElementById('nomeDoFuncionario').value = " "

    return{
        nome,
        horasTrabalhada,
        salarioPorHora,
        salarioTotal
    }

}

function salario(horasTrabalhada, salarioPorHora){

    // verificando se o salario contém hora extra ou não
    if(horasTrabalhada > 160){
        return calcularSalarioComExtra(horasTrabalhada, salarioPorHora)
    }

    return calcularSalarioSemExtra(horasTrabalhada, salarioPorHora)
}


// função responsavel em calcular o salario com hora extra ( + 50% do salario por hora nas horas ecedidas)
function calcularSalarioComExtra(horasTrabalhada, salarioPorHora){
    let extra = (horasTrabalhada - 160) * (salarioPorHora * 1.50)
    let salario = 160 * salarioPorHora

    return salario + extra
}

// função responsavel em calcular o salario sem hora extra
function calcularSalarioSemExtra(horasTrabalhada, salarioPorHora){
    return horasTrabalhada * salarioPorHora
}


//reponsavel em pegar os valores 
function getInputNumberValue(id){
    return Number(document.getElementById(id).value)
}


// função responsavel se já existe o funcionario no banco de Dados
function validando(funcionarios, funcionario){
    let verdade;
    funcionarios.forEach(element => {    
        if(element.nome === funcionario) {
            verdade =  true
            return
        }
    });
    return verdade
}

function criarTabela(){
    const section2 = document.querySelector('.placeTable')
    section2.innerHTML = ""
    const table = document.createElement('table')

    table.setAttribute('border', '1')
    let tabelaComDado =" ";
    let maiorSalario = 0;
    let nomeDoFuncionarioSalarioMaior;

    tabelaComDado += ` <tbody>
        <tr>
            <th>Funcionario</th>
            <th>Horas trabalhada</th>
            <th>Salario por hora</th>
            <th>Salario Total</th>
        </tr>
        `

    bancoDeFuncionarios.forEach(element =>{

        [maiorSalario, nomeDoFuncionarioSalarioMaior] = element.salarioTotal > maiorSalario ? [element.salarioTotal, element.nome] : [maiorSalario, element.nome];


        tabelaComDado += `
        <tr>
            <td>${element.nome}</td>
            <td>${element.horasTrabalhada}</td>
            <td>${element.salarioPorHora}</td>
            <td>${element.salarioTotal}</td>
        </tr>
        ` 
    })

    console.log(maiorSalario)

    tabelaComDado += `
        <tr >
        <td >Maior Salario : </td>
        <td colspan="3"> ${nomeDoFuncionarioSalarioMaior}</td>
        </tr>

        </tbody
    `

    table.innerHTML = tabelaComDado
    section2.appendChild(table)
}

