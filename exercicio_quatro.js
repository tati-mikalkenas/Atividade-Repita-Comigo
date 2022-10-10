//: Exercício 4: Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive).

var começo= 15;
var fim= 100;
var contagem=0;

while(começo < fim) {
 começo= começo +1;
 contagem += começo;
}

var media= parseInt(contagem/85);
var texto="A média entre 15 e 100 é: " + media;

document.write(texto);