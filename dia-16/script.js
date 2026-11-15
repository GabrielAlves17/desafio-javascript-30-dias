let botao = document.querySelector("#contar")
let botaoMenos = document.querySelector("#diminuir")
let botaoReset = document.querySelector("#resetar")
let numeroClique = document.querySelector("#numero")

let contador = 0 

botao.addEventListener("click", function () {
    contador++
    atualizarTela()

})

botaoMenos.addEventListener("click", function(){
    contador --
    atualizarTela()

})

botaoReset.addEventListener("click" , function (){
    contador = 0
    atualizarTela()

})




function atualizarTela(){

    if (contador < 0){
        contador = 0
    }
    
    numeroClique.textContent = contador

    if (contador >= 10){
    numeroClique.style.color = "green"
    } else if(contador < 10 ) {
        numeroClique.style.color = "black"
    }

}