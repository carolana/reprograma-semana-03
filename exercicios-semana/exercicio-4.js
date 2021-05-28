// Utilize a estrutura de repetição for para imprimir no console conforme instruções abaixo: 
    // a) números de 1 a 100  
    // b) quando chegar no número 50 interrompa a instrução e pare o loop 
    // c) quando chegar no número 50 pule a instrução 



console.log("---------------------")
console.log("Inicio do A")
let num = 1
for (num = 1; num<=100; num++) {
    console.log(num)
} console.log("Fim do A")
console.log("---------------------")


console.log("Inicio do B")
let i = 1
for (i = 1; i <=100; i++) {
    console.log(i) 
        if (i === 50){ 
            break
    }   
} 
console.log("Fim do B")
console.log("---------------------")


console.log("Inicio do C")
let x = 0

while (x <100) {
    x++

    if (x===50) {
        continue
    }
console.log(x)
}
console.log("Fim do C")
console.log("---------------------")