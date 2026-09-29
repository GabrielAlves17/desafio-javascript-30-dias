let contador = 0;

for(let i = 2; i <= 20; i+=2){
    contador = contador + 1; 
}

console.log(contador);


let multiplos = 0;

for(let i = 3; i <= 30; i += 3) {
    multiplos = multiplos + i;
}

console.log(multiplos);


let qtdPares = 0;
let qtdImpares = 0;
let somapares = 0;
let somaimpares = 0;

for(let i = 1; i <= 50; i++){
    if (i % 2 == 0){
       qtdPares = qtdPares + 1; 
       somapares = somapares + i;
    } else {
        qtdImpares = qtdImpares + 1;
        somaimpares = somaimpares + i;
    }
}

console.log(qtdPares);
console.log(somapares);
console.log(qtdImpares);
console.log(somaimpares);

let soma3 = 0;
let contador2 = 0;

for(let i = 1; i <= 20; i++){
    contador2 = contador2 + 1;
    soma3 = soma3 + i;
}

console.log(soma3);
console.log(contador2);


let multiplos4 = 0;

for(let i = 1; i <= 30; i++) {
    if(i % 4 === 0){
        multiplos4 = multiplos4 + 1;
    }
};

console.log(multiplos4);



let somaimpares2 = 0;

for(let i = 1; i <= 20; i++) {
    if(i % 2 > 0){
        somaimpares2 = somaimpares2 + i;
    }
};

console.log(somaimpares2);


let qtdpares = 0;
let somapares2 = 0;
let por5 = 0;

for(let i = 1; i <= 40; i++){
    if( i % 2 === 0){
        qtdpares = qtdpares + 1;
        somapares2 = somapares2 + i;
    };

    if (i % 5 === 0){
        por5 = por5 + 1;
    }
};

console.log("A quantidade de pares é: ", qtdpares);
console.log("A soma de todos os números pares é: ", somapares2);
console.log("A quantidade de números divisiveis por 5 é: ", por5);
