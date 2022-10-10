//: Exercício 11: Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão entre os números 24 e 42 (incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo.


alert("Exercício 11")

    function y () {
            var l1 = 24;
            var l2 = 42;
            var soma = 0;
            var i = 0;


            while (i < 10) {
                var n = prompt(i + " numero: ");
                if (n > l1 && n < l2) {
                    soma++;  
                }
                i++;
            }
            console.log(soma);
        }