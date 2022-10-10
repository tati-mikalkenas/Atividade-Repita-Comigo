//: Exercício 6 : Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. Considere que a nota de aprovação é 9,5. Logo após escrever a mensagem "Calcular a média de outro aluno Sim/Não?" e solicitar um resposta. Se a resposta for "S", o programa deve ser executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados.




var contagem=20
var nota_um=parseFloat(prompt(" Escreva a primeira nota do aluno X:"))
var nota_dois=parseFloat(prompt(" Escreva a segunda nota do aluno X:"))
var media=(nota_um + nota_dois)/2
var texto="Essa é a média final do aluno X: " + media


  if (media > 9.5 ) {
    alert(texto + " esse aluno(a) está aprovado(a).");
    document.write(texto + " esse aluno(a) está aprovado(a)." + "<br>");
} else {
    alert(texto + " esse aluno(a) está reprovado(a).");
    document.write(texto + " esse aluno(a) está reprovado(a)."+ "<br>");
}


var escolha=parseInt(prompt("Deseja calcular a média de outro aluno ?  1.Sim, 2. Não"))

if (escolha === 1) {
    menu()

   } else if ( escolha === 2) {
    lista()
}

function menu(){
var nota_um=parseFloat(prompt(" Escreva a primeira nota do aluno Y:"))
var nota_dois=parseFloat(prompt(" Escreva a segunda nota do aluno Y:"))
var media=(nota_um + nota_dois)/2
var texto="Essa é a média final do aluno Y: " + media


  if (media >= 9.5 ) {
    alert(texto + " esse aluno(a) está aprovado(a).");
    document.write(texto + " esse aluno(a) está aprovado(a)."+ "<br>");
} else {
    alert(texto + " esse aluno(a) está reprovado(a).");
    document.write(texto + " esse aluno(a) está reprovado(a)."+ "<br>");
}

   
}

function lista(){

var contagem_um= 50;


while (contagem_um > 0) {
var texto_um = "Aluno(a) Aprovados: " + contagem_um + "<br>";
document.write(texto_um);
contagem_um = contagem_um -1;
}
}
   