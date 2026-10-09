let por6 = 0;
let por4 = 0;
let ambos = 0;

for(let i = 1; i <= 40; i++){
    if(i % 6 === 0 && i % 4 === 0){
        ambos = ambos + 1
    } if(i % 6 === 0){
        por6 = por6 + 1
    }
     if(i % 4 === 0){
        por4 = por4 + 1;
    }}

console.log(ambos);
console.log(por6);
console.log(por4);


let soma = 0;
let por5 = 0;
let por7 = 0;

for(let i = 1; i <= 50; i++){
    if(i % 7 === 0){
        por7 = por7 + i
    } if (i % 5 === 0){
        por5 = por5 + i
    } if( i % 7 === 0 || i % 5 === 0){
        soma = soma + i
    }
}

console.log(soma);
console.log(por7);
console.log(por5);

let pares = 0;
let impares = 0;
let divpor3 = 0;
let divpares = 0;

for(let i = 1; i <= 60; i++){
    if(i % 2 === 0){
        pares = pares + 1
    } if (i % 2 > 0.1){
        impares = impares + 1
    } if (i % 3 === 0){
        divpor3 = divpor3 + 1
    } if (i % 3 === 0 && i % 2 === 0){
        divpares = divpares + 1
    }
}

console.log(pares);
console.log(impares);
console.log(divpor3);
console.log(divpares);

let somapares = 0;
let somaimpares = 0; 

for(let i = 1; i <= 100; i++){
    if(i % 2 === 0){
        somapares = somapares + i
    } if (i % 2 === 1){
        somaimpares = somaimpares + i
    }}

console.log(somapares);
console.log(somaimpares);
    
    if (somapares > somaimpares){
        console.log("A soma dos pares é maior: ", somapares);
    } else{
        console.log("A soma dos impares é maior: ", somaimpares);
    }

let por4_ultima = 0;
let soma3 = 0;
let por6dois = 0;
let maiornumero = 0;

for(let i = 1; i <= 100; i++){
    if(i % 4 === 0){
        por4_ultima = por4_ultima + 1
        soma3 = soma3 + i
    } if (i % 4 === 0 && i % 6 === 0){
        por6dois = por6dois + 1 
        if (i > maiornumero) {
        maiornumero = i
    }
    }
}

console.log(por4_ultima);
console.log(soma3);
console.log(por6dois);
console.log(maiornumero);