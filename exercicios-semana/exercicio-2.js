//2 - crie um algoritmo que converte dias em horas, quando recebe um número de dias.

function converterDiasemHoras (dias) {
    let conversao = dias*24
    return (`${dias} dias quando convertidos equivalem a ${conversao} horas`)
}

console.log(converterDiasemHoras(5))