  //: 10 - Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário.

  alert("Exercício 10")

  var n=parseInt(prompt("Informe um valor para ver a tabuada"));
           
            function x () {
                var j = 1;
            
                while (j < n) {
                    document.write("<br>Tabuada " + j + "<br>");
                    var i = 0;
    
                    while (i <= 10) {
                        var multiplicacao = j * i;
                        document.write(j + " x " + i + "= " + multiplicacao + "<br>")
                        i++;
                    }
    
                    j++;
                }
            }