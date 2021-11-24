function preco () { 
    
    const quantidadeDeApple = document.getElementById('apple').value
    let resultado;
    if(quantidadeDeApple < 12){
        resultado = menosDozeApple(quantidadeDeApple) 
        imprimiResultado(resultado)
        return
    }

    resultado = dozeApple(quantidadeDeApple)
    imprimiResultado(resultado)
    return

} 

function menosDozeApple(quantidade){
    return Number(quantidade) * 1.30
}

function dozeApple(quantidade){
    return Number(quantidade) * 1
}

function imprimiResultado(resultado){
    console.log(resultado)
    const divResultado = document.querySelector('.resultado')
    divResultado.innerHTML = ""
    const p = document.createElement('p')
    p.innerHTML = `O valor total é $ ${resultado}`

    divResultado.appendChild(p)
    return
}

//quando clicar no botao, vai executar a funão whatIsMoreValue
document.querySelector('button').addEventListener('click', (e) =>{
    e.preventDefault
    preco()
})

