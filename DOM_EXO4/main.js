console.log(document.getElementsByTagName("h1")[1].innerText)
console.log(document.getElementsByTagName("li")[document.getElementsByTagName("li").length - 1].innerText);
console.log(document.getElementsByTagName("p")[0].innerText.toUpperCase())
let tab = document.querySelectorAll("li");
tab.forEach(element => {
    console.log(element.innerText.toUpperCase())
})