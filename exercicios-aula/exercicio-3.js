// Crie uma função que determine se um número é ímpar ou par

function verificarImparOuPar(num) {
    if (num%2===0) {
        return (`${num} é par`)
    } else {
        return (`${num} é ímpar`)
    }
}

console.log(verificarImparOuPar(45))
console.log(verificarImparOuPar(52))
