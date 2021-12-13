let exo1 = document.querySelectorAll("div")[2].firstElementChild
console.log(exo1)

let exo2 = document.querySelectorAll("div")[2].lastElementChild
console.log(exo2)

let exo3 =  document.querySelectorAll("div")[2].querySelector("p").querySelector("i")
console.log(exo3)

let exo4 = document.querySelectorAll("div")[2].querySelectorAll("p")[1].querySelector("b");
console.log(exo4)

console.log(exo3.parentElement)
console.log(exo4.parentElement)
console.log(document.querySelectorAll("div")[2].firstElementChild.nextElementSibling)