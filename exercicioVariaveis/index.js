let varA = 'A' //B
let varB = 'B' //C
let varC = 'C' //A
let troca1 = varA
let troca2 = varC
varC = troca1
varA = varB
varB = troca2

let resultado = `${varA}, ${varB}, ${varC}`

console.log(resultado)