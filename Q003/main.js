const clientesDoBanco = []

document.querySelector('#adicionar').addEventListener('click', (e) => {
    e.preventDefault()
    bancoDeFuncionarios.push(cadastrarCliente())
    console.log(clientesDoBanco)

})

document.querySelector('#fazerSaque').addEventListener('click', (e) => {
  

})

function cadastrarCliente(){
    const nome = document.querySelector('#nomeDoCliente').value
    const saldo = Number(document.querySelector('#saldo').value)

    if(cadastrarCliente.length >= 5){
        alert('Já existe 5 clientes, faça o debito')
    }

    if(cadastrarCliente.length < 5){
        alert(`precisa-se no minimo de 5 Clientes, já tem ${clientesDoBanco.length} cadastrados`)
    }

    return{
        nome,
        saldo
    }
}

function transicaoParaSaque(){

}