
//: Exercício 3: Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente.Exemplo: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1.

var começo= 10;

while(começo > 0 ) {
var texto="Contagem em " + começo + "<br>";
document.write(texto);
começo= começo -= 1;
  
}
