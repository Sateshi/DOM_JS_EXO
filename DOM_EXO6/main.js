let firsth3 = document.getElementById("content").firstElementChild;
console.log(firsth3)

let titreniv3 =  document.getElementById("titreNiv3")
console.log(titreniv3)

console.log(titreniv3.previousElementSibling)

let precedentPP = document.getElementsByClassName("petitParagraphe")[0].nextElementSibling
console.log(precedentPP)

let parentImportant = document.getElementsByClassName("important")[0].parentElement
console.log(parentImportant)

console.log(parentImportant.firstElementChild)

let succsucc = document.getElementById("textGeneral").nextElementSibling.nextElementSibling
console.log(succsucc)

let p = document.getElementsByTagName("span")[1].parentElement.nextElementSibling
console.log(p)

let primo = document.getElementsByTagName("span")[2].parentElement.previousElementSibling.getElementsByTagName("b")[0].innerText
console.log(primo)

let grandPara = document.querySelector(".grandParagraphe")
console.log(grandPara)

let lis = document.querySelectorAll("li")

lis.forEach(element => {
    console.log(element)
})