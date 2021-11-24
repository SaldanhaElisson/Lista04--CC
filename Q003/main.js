function finobbaci(){
    
    let valorAtual = 1;
    let valorAnterior = 0;
    let valorFuturo = 0
    let elementDom =document.querySelector('.resultado');
    let estrutura = ``;
    elementDom.innerHTML = ' '
    for(i = 1; i <= 12; i++){
        estrutura += `<p> ${valorAtual} ,`
        valorFuturo = valorAnterior + valorAtual
        valorAnterior = valorAtual
        valorAtual = valorFuturo
    }
    
    setTimeout(function(){elementDom.innerHTML +=  estrutura; }, 1000);   
}

//reponsavel em pegar os valores 
function getInputNumberValue(id){
    return Number(document.getElementById(id).value)
}

// quando clicar no botão vai executar a função fatorial()
document.querySelector('button').addEventListener('click', (e) =>{
    e.preventDefault
    
    finobbaci()
})