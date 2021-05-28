// Imprima no console os números pares existentes de 0 a 100

let i = 0

while (i <= 100) {
    let resto = i%2
    if (resto === 0) {
        console.log("Par " + i)
    }
    i++
}