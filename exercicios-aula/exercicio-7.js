//Crie uma função que recebe um número e calcula o fatorial dele

function fatorial(numero) {
    let contador = 1

    for (let i =  numero; i>1; i--) {
        contador *= i 
    }
    return contador
}

console.log(fatorial(10))