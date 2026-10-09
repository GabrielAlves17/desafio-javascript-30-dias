let notas = [1, 6, 7, 5, 6];
let somarNotas = 0;
let media = 0;
let maiorNotas = notas[0];
let menorNotas = notas[0];
let alunosaprovado = 0;
let alunosreprovado = 0;


for(let i = 0; i < notas.length; i++){
    somarNotas = somarNotas + notas[i]
    
    if(notas[i] > maiorNotas){
    maiorNotas = notas[i]}

    if(notas[i] < menorNotas) {
    menorNotas = notas[i]}

    if(notas[i] >= 6){
        alunosaprovado = alunosaprovado + 1
        console.log("O aluno", i + 1 ,  "tirou a nota", notas[i], "e foi Aprovado");
        
    } else{
        alunosreprovado = alunosreprovado + 1 
        console.log("O aluno", i + 1, "tirou a nota", notas[i], 'e foi Reprovado');
    }
}


media = somarNotas / notas.length

console.log("Soma das notas: ",somarNotas);
console.log("Media das notas: ", media);
console.log("A maior nota da turma foi:", maiorNotas);
console.log("A menor nota da turma foi:", menorNotas);
console.log("Quantos alunos foi aprovado:",alunosaprovado);
console.log("Quantos alunos foi reprovados:",alunosreprovado);