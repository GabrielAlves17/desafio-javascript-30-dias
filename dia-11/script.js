let e1 = document.querySelector("#titulo")
let tudo = document.querySelector("body")
let e2 = document.querySelector("#aviso")
let e3 = document.querySelector("#caixa")


e2.classList.add("alerta")
e2.classList.remove("erro")
e1.classList.add("ativo")
tudo.classList.add('body')

e3.classList.toggle("azul")
e3.classList.toggle("azul")

let e4 = document.querySelector('#titulo2')
let e5 = document.querySelector('#painel')
let e6 = document.querySelector('#status')


e4.classList.remove('fraco')
e4.classList.add('forte')
e5.classList.remove('claro')
e5.classList.add("escuro")

e6.classList.toggle('ativo')


let e7 = document.querySelector("#mensagem")

e7.style.color = "blue"
e7.style.fontSize = "24px"
e7.style.backgroundColor = "yellow"


let final1 = document.querySelector("#tituloFinal")
let final2 = document.querySelector("#caixaFinal")
let final3 = document.querySelector("#mensagemFinal")


final1.classList.remove("apagado")
final1.classList.add("destaque")

final2.classList.remove("claro")
final2.classList.add("escuro")
final3.style.color = 'green'
final3.style.fontSize = '20px'