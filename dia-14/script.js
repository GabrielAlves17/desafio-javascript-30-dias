function saudar(nome){
    console.log("Olá " + nome)
}

saudar("Gabs")

function mostrarNome(nome){
    console.log("Meu nome é " + nome)
}

let qualNome = prompt("Qual seu nome: ")

mostrarNome(qualNome)

function somar(n1, n2){
    return n1 + n2
}
somar(10, 8)

let resultado = somar(10, 8)

console.log(resultado)

function dobrar(numero){
    return numero * 2
}

let resultado2 = dobrar(4)

console.log(resultado2)


function verificarIdade(idade){
    if (idade >= 18){
        return "Maior de idade"
    } else {
        return "Menor de idade"
    }
}

let qualIdade = Number(prompt("Qual seu idade? "))

let idade = verificarIdade(qualIdade)

console.log(idade)

const dobrar = (numero) => {
    return numero * 2
}