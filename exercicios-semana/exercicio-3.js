//3 - Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.


function dividir (a, b) {
    let resultado_divisao = a/b
    if (resultado_divisao%2 ===0) {
        console.log("O número é par")
    }
    return resultado_divisao.toFixed(2)
}

console.log(dividir(12,6))