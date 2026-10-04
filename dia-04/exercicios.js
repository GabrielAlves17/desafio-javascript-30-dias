let soma = 0;
let por3 = 0;

for(let i = 1; i <= 50; i++){
    if(i % 3 === 0){
        por3 = por3 + 1
        soma = soma + i 
    }



    console.log(i);
}

console.log(por3);
console.log(soma);

let energia = 100;

while(energia > 0){
    console.log(energia);
    energia -= 15;


}

let por5 = 0;

for(let i = 30; i >= 1; i--){
    if(i % 5 === 0){
        por5 = por5 + 1
        console.log(i);
    }
}
console.log(por5);

let numero = 1;

while(numero < 100){
    console.log(numero);
    numero *= 2
}

for(let i = 1; i <= 30; i++){
    if (i % 5 === 0 && i % 3 === 0 ){
        console.log("FizzBuzz")
    }
    else if (i % 5 === 0){
        console.log("Buzz")
    } else if(i % 3 === 0){
        console.log("Fizz")
    }else{
        console.log(i)
    }
}
