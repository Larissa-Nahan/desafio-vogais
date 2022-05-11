const text1 = "eu vou para a escola";
const text2 = "o dia esta lindo hoje";

function contaVogais(texto) {
  let quant = 0;
  texto = texto.replaceAll(" ", "");
  texto = texto.toLowerCase();

  for (letra of texto) {
    if (
      letra == "a" ||
      letra == "e" ||
      letra == "i" ||
      letra == "o" ||
      letra == "u"
    )
      quant++;
  }

  console.log(quant);
}

contaVogais(text1);
