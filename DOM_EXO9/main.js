let exo1 =  document.querySelector("h2");
console.log(exo1.innerText)

exo1.innerText = "Exercice 1"

exo1.nextElementSibling.innerText = "Exercice 1"

let exo4 =  document.querySelector("section")
console.log(exo4.id)

let exo5 = document.querySelector("h1")
console.log(exo5.classList)
console.log(exo5.className)

let exo6 = document.querySelectorAll("h1")

exo6.forEach(element => {
    console.log(element.className)
})

let exo7 = document.querySelector("input")
console.log(exo7.attributes)

let exo8 = document.querySelector("input")
console.log(exo8.type)

let exo9 = document.querySelector("input#inputPassword3").setAttribute("type","password")

let exo10 = document.querySelector("input").setAttribute("type","color")


