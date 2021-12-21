let div = document.querySelector('#content')
let h2 = document.createElement('h2')
h2.innerText = "Part 6 - Exercice 1"
div.appendChild(h2)
let lorem = document.createElement('p')
lorem.innerText = "lorem ipsum dolor sit amet, consectetur adipiscing"
div.appendChild(lorem)

let h1 =  document.createElement('h1')
h1.innerText = "Le DOM - Création de HTML"
div.prepend(h1)

let div2 = document.querySelector('#secondaire')
div2.innerHTML = div.innerHTML;
div2.querySelector('h2').innerText = "Exercice 2"

let div3 = document.createElement('div')
div3.id = "matiere"
let ol = document.createElement('ol')
let li1 = document.createElement('li')
let li2 = document.createElement('li')
let li3 = document.createElement('li')

li1.innerText = "document.createElement()"
li2.innerText = "document.appendChild()"
li3.innerText = "document.prepend()"

ol.appendChild(li1);
ol.appendChild(li2);
ol.appendChild(li3)
div3.appendChild(ol)
document.body.appendChild(div3)