var min = 1
var max = 10

var sorteio = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(sorteio);

var numDigitado = parseInt(prompt(`Digite um número entre ${min} e ${max} e tente adivinhar qual o número sorteado.`));

var tentativa = 1;
var maximoTentativas = 5;

while (tentativa < maximoTentativas) {
    if  (numDigitado < 1 || numDigitado > 10) {
        numDigitado = parseInt(prompt(`O número digitado precisa estar entre ${min} e ${max}. Por favor, digite um número válido.`));  
    }
    else if (numDigitado != sorteio && tentativa < 4) {
        numDigitado = parseInt(prompt(`Você errou. Tente novamente. Essa foi a tentativa número ${tentativa}`));
        tentativa++;
    }
    else if (numDigitado != sorteio && tentativa >= 4) {
        numDigitado = parseInt(prompt("Você errou. Tente novamente. Essa é sua última chance"));
        tentativa++;

        if (numDigitado != sorteio && tentativa > 4) {
            console.log("Você perdeu!!!");    
        }
    
    } else {
        console.log("Parabéns. Você acertou")
        break;
    }        
}

