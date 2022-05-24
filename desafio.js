const text1 = "eu vou para a escola";
const text2 = "o dia esta lindo hoje";
const text3 = "Ela é a vilã";

const vogais = "aàáãâeèéêiìíîoòóõôuùúû"

function contaVogais(texto) {
  let quant = 0;
  texto = texto.replaceAll(" ", "");
  texto = texto.toLowerCase();

  
  for (let i = 0; i < vogais.length; i++) {
    for (let j = 0; j < texto.length; j++) {
      if (vogais[i] === texto[j]) quant++;
    }
  }

  console.log(quant);
}

contaVogais(text3);
