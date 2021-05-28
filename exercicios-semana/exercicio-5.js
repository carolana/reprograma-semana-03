// 5 - Vamos criar uma calculadora com as 4 operações matemáticas básicas? rs

// a) Deverá ser possível escolher uma operação aritimética em forma de string: 'soma', 'multiplicacao', 'divisao' e 'subtracao'
// b) Deverá ser possível passar 2 números para a operação escolhida
// c) Deverá retornar o resultado e imprimir no console


function calculadora (operação, a, b) {
    if (operação === "soma") {
        let somar = a + b
    return somar
    } else if (operação === "multiplicação") {
        let multiplicar = a*b
    return multiplicar
    } else if (operação === "divisão") {
        let dividir = a/b
    return dividir
    } else if (operação === "subtração") {
        let subtrair = a-b
    return subtrair
    }
}

console.log(calculadora("subtração", 200, 5))