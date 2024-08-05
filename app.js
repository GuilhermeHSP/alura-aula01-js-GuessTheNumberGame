alert("Boas vindas ao jogo do número secreto");
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1)
console.log(numeroSecreto);
let numeroDigitado;
let tentativas = 1;

// Enquanto o número digitado for diferente ao número secreto
while (numeroDigitado != numeroSecreto) {
  numeroDigitado = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
// Se o número digitado for igual ao número secreto
    if (numeroDigitado == numeroSecreto) {
            break;

    } else {
            if (numeroDigitado > numeroSecreto) {
            alert(`O número secreto é menor que ${numeroDigitado}`);
            } else {
            alert(`O número secreto é maior que ${numeroDigitado}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
