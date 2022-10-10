//: Exercício 5:  Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo.

var contagem=0;
var valor_um=parseInt(prompt("Digite o valor 1. OBS: Coloque um valor menor do que o valor 2, obrigada !!!!"));
var valor_dois=parseInt(prompt("Digite o valor 2"));
var media= valor_um + valor_dois/2
var resultado= valor_dois- valor_um

if (valor_um < valor_dois) {
  document.write("A média aritmética entre os dois valores é: "+ media)
} else if (media){
document.write=" Números entre eles: " + resultado
}