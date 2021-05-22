//Crie um algoritmo que leia o valor de um jantar, 
//calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

let valor = 300
let taxa = valor * (10/100)
let total = valor + taxa

console.log(`Taxa do garçom: R$ ${taxa} `)
console.log(`Valor total: R$ ${total}`)
