let softSkills = {
    Trello: '49%',
    Git: '87%',
    GitHub : '50%',
    Discord: '15%',
}

let elements = document.querySelectorAll("#liste-soft-skills h2")
let tab = Object.keys(softSkills)
let tab2 = Object.values(softSkills)
console.log(tab)
let i = 0;

// console.log(elements[i].innerHTML)
for (const param in tab) {
    let index = tab.indexOf(elements[i].innerHTML)
    console.log(tab[index])
    elements[i].innerHTML += " " + tab2[index]
    if (parseInt(tab2[index].substring(0, tab2[index].length - 1)) < 50) {
        elements[i].style.backgroundColor = "red";
    } else if (parseInt(tab2[index].substring(0, tab2[index].length - 1)) == 100) {
        elements[i].style.backgroundColor = "gold";
        elements[i].style.color = "black"
    } else if (parseInt(tab2[index].substring(0, tab2[index].length - 1)) > 50) {
        elements[i].style.backgroundColor = "green"
        elements[i].style.color = " white";
    }
    i++;
}