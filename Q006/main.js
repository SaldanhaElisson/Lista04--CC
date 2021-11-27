document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault()
    imprimir()

})

function imprimir(){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = " "
    const p = document.createElement('p')
    
    for(let i = 1; i <= 10; i++){
        p.innerHTML += `${i} -`
    }
    for(let i = 10; i >= 1; i--){
        p.innerHTML += `${i} - `
    }

    resultado.appendChild(p)
}