//Solicite o preço de uma mercadoria e o percentual de desconto 20%. 
//Exiba no console o valor do desconto e o preço a pagar.

let preço = 400
let desconto = preço * (20/100)

let valorTotal = preço - desconto

console.log(`Valor do desconto: R$ ${desconto}`)
console.log(`Preço a pagar: R$ ${valorTotal}`)