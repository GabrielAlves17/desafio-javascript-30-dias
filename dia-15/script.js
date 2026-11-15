let botaoTeste = document.querySelector("#teste")
let botaoMsg = document.querySelector("#mudar")
let texto = document.querySelector("#mensagem")
let botaoCor = document.querySelector("#cor")
let textoCor = document.querySelector("#textoCor")
let botaoTema = document.querySelector("#tema")
let painel = document.querySelector("#painel")
let mostrar = document.querySelector("#aviso")
let bt  = document.querySelector("#mostrar")

bt.addEventListener("click", function (){
    mostrar.classList.toggle("escondido")
})

botaoTeste.addEventListener("click", function () {
    console.log("Botão clicado!")
})

botaoMsg.addEventListener("click", function (){
    texto.textContent = "Texto alterado!"
})

botaoCor.addEventListener('click', function(){
    textoCor.style.color = "red"
})


botaoTema.addEventListener("click" , function (){
    painel.classList.toggle("escuro")
})

