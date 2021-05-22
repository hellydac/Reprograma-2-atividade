//Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, 
//assim como a quantidade de dias pelos quais o carro foi alugado. 
//Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia 
//e 0,15 centavos por km rodado.

let km = 200
let dias = 6
const valorDia = 60
const valorKm = 0.15
let valorDiasTotal = dias * valorDia
let valorKmTotal = km * valorKm

console.log(`Preço a pagar: R$ ${valorKmTotal + valorDiasTotal}`)