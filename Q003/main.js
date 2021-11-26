const clientesDoBanco = []


// responsavel em cadatras clientes no banco dos clientes
document.querySelector('#adicionar').addEventListener('click', (e) => {
    e.preventDefault()
    if(cadastrarCliente() == true){
        alert('Este cliente já existe')
        return
    }
    clientesDoBanco.push(cadastrarCliente())

})


// responsavel por mudar area de cadastro para a area de transição 
document.querySelector('#fazerSaque').addEventListener('click', (e) => {
    e.preventDefault()
    transicaoParaSaque()

})

// responsavel em limpar os dados dos clientes cadastrados
document.querySelector('#limparTabela').addEventListener('click', (e) =>{
    location.reload()
})

function cadastrarCliente(){
    const nome = document.querySelector('#nomeDoCliente').value.toUpperCase()
    const saldo = Number(document.querySelector('#saldo').value)
    const saldo_atual = saldo;
    if(cadastrarCliente.length >= 5){
        alert('Já existe 5 clientes, faça o debito')
        return 
    }

    if(validando(clientesDoBanco, nome)){
        return true
    }

    const credito = gerarCredito(saldo)

    return{
        nome,
        saldo,
        credito,
        saldo_atual
    }
}

function gerarCredito(saldo){
    // o saldo do cliente vai utilizar a seguinte formula para ser gerado: 20% do saldo x 12
    // estipulando um valor de acordo com o que cliente contem no banco
    const credito = (saldo * 0.20) * 12

    return credito
}

function transicaoParaSaque(){
    const telaDeCadastro = document.querySelector('.telaDeCadastros')
    const telaDeSaque = document.querySelector('.telaDeSaque')

    if(clientesDoBanco.length < 5){
        alert(`precisa-se no minimo de 5 Clientes, já tem ${clientesDoBanco.length} cadastrados`)
        return
    }

    telaDeCadastro.classList.add("telaOculta")
    telaDeSaque.classList.toggle("telaOculta")
    return
}

function transicaoParaVoltar(){
    const telaDeCadastro = document.querySelector('.telaDeCadastros')
    const telaDeSaque = document.querySelector('.telaDeSaque')

    telaDeCadastro.classList.toggle("telaOculta")
    telaDeSaque.classList.add("telaOculta")
    return
}




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


// =================================================================================== Segunda_Parte ================================================================

// responsavel em fazer o saque do Cliente
document.querySelector('#fazerOSaque').addEventListener('click', (e) =>{
    e.preventDefault()
    const nome = document.querySelector('.jaCadastrado').value.toUpperCase()
    const saque = Number(document.querySelector('#saque').value)

    fazerSaque(clientesDoBanco, nome, saque)
})

// responsavel em atualizar  o saldo e mostras na tela
document.querySelector('#atualizarSaldoAtual').addEventListener('click', (e) =>{
    e.preventDefault()
    criarTabela()
})

// responsavel em fcriar tabela
document.querySelector('#voltarParaOInicio').addEventListener('click', (e) =>{
    e.preventDefault()
    transicaoParaVoltar()
})


function innerSaldo(saldo){
    const saldoResultado = document.querySelector('.resultado')
    saldoResultado.innerHTML = " "
    const p = document.createElement('p')
    p.innerHTML = `O seu saldo é $ ${saldo}`

    saldoResultado.appendChild(p)

    return
}

function fazerSaque(bancoDeDados, nome, saque){
    let resultadoDaPesquisa;

    bancoDeDados.forEach((e)=>{
        if(e.nome == nome){
            if( e.saldo_atual >= saque ){
                e.saldo_atual = e.saldo_atual - saque
                innerSaldo(e.saldo_atual)
            } else{
                alert('saldo insuficiente ')
            }
            return resultadoDaPesquisa = false

        } else{
            resultadoDaPesquisa = true
        }
        
    })

    if(resultadoDaPesquisa){
        alert('Não existe esse usuario cadastrado')
    }
    return
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
            <th>Nome</th>
            <th>Saldo Inicial</th>
            <th>credito</th>
            <th>Saldo Atual</th>
        </tr>
        `

        clientesDoBanco.forEach(element =>{

        tabelaComDado += `
        <tr>
            <td>${element.nome}</td>
            <td>${element.saldo}</td>
            <td>${element.credito}</td>
            <td>${element.saldo_atual}</td>
        </tr>
        ` 
    })

    table.innerHTML = tabelaComDado
    section2.appendChild(table)
}