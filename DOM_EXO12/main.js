let competences = {
    HTML: '71%',
    CSS: '95%',
    JS: '50%',
    React: '18%',
    Laravel: '100%'
}

let elements = document.querySelector('#liste-competences').querySelectorAll('h2');
let tab = Object.values(competences);
let i = 0;
for (const propriete in competences) {
    if (parseInt(tab[i].substring(0, tab[i].length - 1)) < 50) {
        elements[i].style.backgroundColor = "red";
    } else if (parseInt(tab[i].substring(0, tab[i].length - 1)) == 100) {
        elements[i].style.backgroundColor = "gold";
        elements[i].style.color = "black"
    } else if (parseInt(tab[i].substring(0, tab[i].length - 1)) > 50) {
        elements[i].style.backgroundColor = "green"
        elements[i].style.color = " white";
    }
    elements[i].innerText = tab[i];
    i++;
}