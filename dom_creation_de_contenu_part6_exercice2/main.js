let input1 = document.querySelector('input');
let input2 = document.querySelectorAll('input')[1];
let input3 = document.querySelectorAll('input')[2];
let ul = document.querySelector('ul')

input1.addEventListener("click", function() {
    ul.removeChild(ul.firstElementChild)
})

input2.addEventListener("click", function() {
    ul.removeChild(ul.lastElementChild)
})

input3.addEventListener("click", function(){
    ul.removeChild(ul.children[Math.floor(Math.random() * (ul.children.length))])
})

let ul2 = document.querySelectorAll("ul")[1]
let newLi = document.createElement("li")
let input4 = document.querySelectorAll('input')[3]
newLi.innerText = "le grand remplacement"

input4.addEventListener("click", function(){
    ul2.replaceChild(newLi,ul2.children[1])
})

let textArea = document.querySelectorAll('input')[4]
let input5 = document.querySelectorAll('input')[5]

input5.addEventListener("click", function() {
    let newLi3 = document.createElement("li")
    newLi3.innerText = textArea.value;
    ul2.replaceChild(newLi3,ul2.children[2])
})