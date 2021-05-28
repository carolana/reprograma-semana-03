//Crie uma função que converta uma quantia em real para dólar utilizando a cotação do dia

function realParaDolar (quantia) {
    let dolar = 5.37
    let resultado = quantia/dolar
    return resultado.toFixed(2)
}

console.log(realParaDolar(20))