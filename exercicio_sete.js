//: Exercício 7: Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. São 6 notas ao total. Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo valor ao usuário. 

alert("Exercício 7 - Notas do(a) Aluno(a) X: ")

var limite=parseInt(alert(" Escreva apenas números de 0 a 10 "))

var nota_um=parseInt(prompt(" Escreva a nota da avaliação 1 do aluno X:"))
while (nota_um > 11) {
        nota_um = parseInt(prompt("Digite o número novamente: "));
        
    } 


var nota_dois=parseInt(prompt(" Escreva a nota da avaliação 2 do aluno X:"))
while (nota_dois > 11) {
        nota_dois = parseInt(prompt("Digite o número novamente: "));
    } 


var nota_tres=parseInt(prompt(" Escreva a nota da avaliação 3 do aluno X:"))
while (nota_tres > 11) {
        nota_tres = parseInt(prompt("Digite o número novamente: "));
    } 


var nota_quatro=parseInt(prompt(" Escreva a nota da avaliação 4 do aluno X:"))
while (nota_quatro > 11) {
        nota_quatro = parseInt(prompt("Digite o número novamente: "));
    } 


var nota_cinco=parseInt(prompt(" Escreva a nota da avaliação 5 do aluno X:"))
while (nota_cinco > 11) {
        nota_cinco = parseInt(prompt("Digite o número novamente: "));
    } 


var nota_seis=parseInt(prompt(" Escreva a nota da avaliação 6 do aluno X:"))
while (nota_seis > 11) {
        nota_seis = parseInt(prompt("Digite o número novamente: "));
    } 


var media=(nota_um + nota_dois + nota_tres + nota_quatro + nota_cinco + nota_seis)/6
var texto="Essa é a média do(a) Aluno(a) X: " + media
document.write(texto);

