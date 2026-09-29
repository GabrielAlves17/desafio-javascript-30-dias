let nome = 'Gabs'
let idade = 18
let trabalha = true 

if (idade > 20){
    console.log("Aí sim você já tem 20");
}
else{
    console.log ('KKKKKKKKKK bebezão')
};

function informeIdade(MinhaIdade){
        if (MinhaIdade >= 50){
            console.log("velho demais")
        }
        else if (MinhaIdade < 18){
            console.log("Menor de Idade");
        }
       else if (MinhaIdade >= 18) {
            console.log("Maior de idade kkkkk tá fudid*")
        }
}

console.log(informeIdade(55));

for(let i = 1; i <= 10; i++){
    console.log(i);
}


for(let pares = 1; pares <= 10; pares++){
    const calculo = pares * 2 
    console.log(calculo);
}


let soma = 0; 

for(let i = 1; i <= 10; i++){
    soma = soma + i;
}

console.log(soma);

let divi = 0;

for(let i = 10; i >= 1; i --){
    console.log(i);
}

for(i = 1; i <= 6; i++){
    const calculo2 = i * 5
    console.log(calculo2);
}

let soma2 = 0;

for(let i = 2; i <= 20; i+= 2) {
    soma2 = soma2 + i;
}

console.log(soma2);
