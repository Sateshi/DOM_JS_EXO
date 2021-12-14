let content = document.querySelector("#content");
console.log(content)

let content2 = document.querySelectorAll("#content")[0];
console.log(content2)

let li = document.querySelector(".important");
console.log(li)

let liAll = document.querySelectorAll(".important");
console.log(liAll)

let allLi = document.querySelectorAll("li");

allLi.forEach(element => {
    let i = element.innerText.length - 1;
    let print = element.innerText.slice(0,-1);
    print += element.innerText.charAt(i).toUpperCase()
    console.log(print)
})

let p = document.getElementById("content").getElementsByClassName("grandParagraphe")[0];
console.log(p)