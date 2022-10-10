//: Exercício 8: Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO. O N  é um valor informado pelo usuário.

var numero=parseInt(prompt(" Informe o valor de N porém, ele deve ser maior do que 0"))


var numero_um= numero - 1;
var resultado= numero_um;
var texto="Esses são os números inteiros entre 1 e N: " + resultado
document.write(texto);