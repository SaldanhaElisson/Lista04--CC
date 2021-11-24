// Função responsavel pela operação algebrica
function whatIsMoreValue(){
    
    let elementDom = document.querySelector('.resultado');
    for(let i = 0; i < 10; i++){
        let numero= getInputNumberValue (`number${i}`)
        let imparOrPar = numero % 2 > 0 ? `Impar`: `Par`
        elementDom.innerHTML += `<p> O valor ${numero} é ${imparOrPar} `
    }
    
}

//reponsavel em pegar os valores 
function getInputNumberValue(id){
    return Number(document.getElementById(id).value)
}

//quando clicar no botao, vai executar a funão whatIsMoreValue
document.querySelector('button').addEventListener('click', (e) =>{
    e.preventDefault
    whatIsMoreValue()
})

