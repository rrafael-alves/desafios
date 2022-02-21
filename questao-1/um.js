// # Questão 01
// Escreva um algoritmo que mostre na tela uma escada de tamanho n utilizando o caractere * e espaços. A base e altura da escada devem ser iguais ao valor de n. A última linha não deve conter nenhum espaço.
// Exemplo:
// Entrada:
// n = 6


// Saída:
//           *
//         **
//       ***
//     ****
//   *****
// ******




let entrada = prompt("digite um numero: ")
let escada = []
let mostrar = document.querySelector(".escada")

for (let i=0 ; i < entrada; i++){ 

    escada.push(" ".repeat(entrada - i) + "*".repeat(i + 1) + "<br />")
   
} 


mostrar.innerHTML = escada.join(" ")
console.log(escada)

