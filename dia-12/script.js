let h2 = document.createElement('h2')
let body = document.querySelector("body")
let p = document.createElement('p')
let e1 = document.querySelector("#caixa")


body.append(h2)

h2.textContent = "Dia 12"

p.textContent = "Elemento criado pelo JavaScript"

e1.append(p)


let e2 = document.createElement('li')
let e22 = document.querySelector("#lista")



e2.textContent = "JavaScript"

e22.append(e2)
