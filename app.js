alert("Boas vindas ao jogo do número secreto");
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random()* numeroMaximo + 1);

let chute;
console.log("Valor do chute:", chute);
let tentativas = 1;

console.log("Resultado da comparação:", chute == numeroSecreto);
console.log("Valor do número secreto:", numeroSecreto)

// enquanto o chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    //se o chute for igual ao número secreto
    if (numeroSecreto == chute) {
        break;
    }
    else{ 
        alert("Você errou hahahaha")
        if(numeroSecreto > chute){
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
        //tentativas = tentativas + 1
        tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
alert(`Parabéns, você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);

// if(tentativas > 1) {
// alert(`Parabéns, você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas!`);
// } else {
// alert(`Parabéns, você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa!`);
//}


