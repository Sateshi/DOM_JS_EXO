let exo1 = document.querySelector("h1");
exo1.innerText = "Les attributs class et id";

let exo2 = document.querySelector("h2");
exo2.innerText = "Exercice 2 partie A"

let exo3 = document.querySelectorAll("h2")[1]
exo3.innerText = "Exercice 2 partie B"

let exo4 =  document.querySelector("p")
exo4.innerText = "L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes par coeur"

let exo5 = document.querySelectorAll("p")[1]
exo5.innerText = "La manipulation de l'attribut Style peut-être une solution rapide"

exo1.setAttribute("id","bigTitle")

let exo7 = document.querySelector("div")
exo7.classList.add("container")

let exo8 = document.querySelectorAll("h2")
exo8.forEach(element => {
    element.classList.add("title")
})

let exo9 = document.querySelectorAll("p")
exo9.forEach(element => {
    element.classList.add("text")
})

let exo10 = document.querySelector("section")
exo10.classList.add("margin-bottom","border-black","padding")

let exo11 = document.querySelectorAll("section")[1]
exo11.classList.add("margin-top","border-black","padding")

let exo12 = document.querySelector("section div")

exo12.setAttribute("style","background-color : blue; height: 20px; width: 20px")