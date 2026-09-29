let testewhile = 1;

while(testewhile <= 5){
    console.log(testewhile)

    testewhile = testewhile + 1;
}

let testewhile2 = 5;

while(testewhile2 >= 1){
    console.log(testewhile2)

    testewhile2 = testewhile2 - 1;
}

let numero = 2;

while(numero <= 10){
    console.log(numero)

    numero = numero + 2;
}

let numero2 = 1;
let acumulador = 0;

while(numero2 <= 10){
    acumulador = acumulador + numero2
    numero2 = numero2 + 1}

     console.log(acumulador);

let pares4 = 1;
let soma4 = 0;

while(pares4 <= 20) {

    if (pares4 % 2 === 0){
        soma4 = soma4 + pares4;
    }
    pares4++;
}

console.log(soma4);


let exercicio1 = 1;
let e1impares = 0;
let somaE1 = 0;

while(exercicio1 <= 25){
    if(exercicio1 % 2 === 1){
        e1impares = e1impares + 1;
        somaE1 = somaE1 + exercicio1;
    }
    
    exercicio1++;
}

console.log(e1impares);
console.log(somaE1);



let exercicio2 = 20;

while(exercicio2 >= 0) {

    if(exercicio2 % 4 === 0){
        console.log(exercicio2);
    }
    exercicio2--;
}
