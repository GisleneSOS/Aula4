let numeroAleatorio = Math.floor(Math.random()*11);
let errouNumero = 0;

console.log(numeroAleatorio)
for(let i = 0; i < 3; i+=1){
    adivinharValor = prompt("Tente adivinhar o número de 0 a 10:");
    //console.log(i);
    if(numeroAleatorio == adivinharValor){
        alert(`Parabéns! Você acertou.`); 
        break;
    }
    if(numeroAleatorio !== adivinharValor){
        errouNumero += 1;
        //console.log(errouNumero)
        alert("Tente novamente")
    }
    if(errouNumero == 3){
        alert(`Que pena você errou as 3 vezes. O número era ${numeroAleatorio}`)
    }
}