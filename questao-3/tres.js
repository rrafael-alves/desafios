// # Questão 03
// Duas palavras podem ser consideradas anagramas de si mesmas se as letras de uma palavra podem ser realocadas
//para formar a outra palavra. Dada uma string qualquer, desenvolva um algoritmo que encontre o número de pares 
//de substrings que são anagramas.
// Exemplo:
// Exemplo 1)
// Entrada:
// ovo


// Saída:
// 2


// Explicação:
// A lista de todos os anagramas pares são: [o, o], [ov, vo] que estão nas posições [[0], [2]], [[0, 1], [1, 2]] respectivamente. 


// Exemplo 2)
// Entrada:
// ifailuhkqq


// Saída:
// 3


// Explicação:
// A lista de todos os anagramas pares são: [i, i], [q, q] e [ifa, fai] que estão nas posições [[0], [3]], [[8],  [9]] e [[0, 1, 2], 
//[1, 2, 3]].


var input = prompt("escreva uma palavra:");
var words = input.split(", ");

for (var i = 0; i < input.length; i++) {

  var palavra = input[i];
  var alfabeto = palavra.split("").sort().join("");

  for (var j = 0; j < input.length; j++) {

    if (i === j ) {
      continue;
    }

    var outraletra = input[j];
    if (alfabeto === outraletra.split("").sort().join("")) {
     
      console.log(`[${palavra} , ${outraletra}]   [[${i}] , [${j}]] `);
    }
  }
} 



	

