let boletim = [ ]
let media = 0;
let somanotas = 0;
let qntNotas = 0;

for(let i = 0; i <= 2; i++){
    let notas = Number(prompt("Digite a nota do aluno" +  (i + 1) + ":")) 
    boletim.push(notas)

    qntNotas = qntNotas + 1
    somanotas = somanotas + notas 
}

for(let i = 0; i < boletim.length; i++){
    console.log("O aluno", i + 1, "Tirou", boletim[i])
}

media = somanotas / qntNotas

console.log(media);
console.log(somanotas);
console.log(boletim);