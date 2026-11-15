let e1 = document.querySelector("#caixa")
let p = document.createElement("p")
let h3 = document.createElement("h3")
let botao = document.createElement("button")
let p1 = document.createElement('p1')


botao.textContent = 'Continuar'
//botao.classList.add("botao")

p.textContent = 'Dia 13'
p.classList.add("destaque")

e1.append(botao)
e1.appendChild(p)
e1.append(h3)


h3.textContent = "Resumo do Dia 13"
h3.classList.add("titulo")

p1.textContent = "Aprendi a criar elementos com JavaScript"
p1.classList.add("texto")

e1.append(p1)