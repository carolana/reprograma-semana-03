// Criar uma função que calculo o IMC de uma pessoa

function calcularIMC(massa, altura) {
    return massa/ (altura**2)
}

let imc = calcularIMC(120, 1.65)
console.log(`Seu IMC é: ${imc.toFixed(2)}`)