let myObject = {
    nom: 'nicolas',
    age: 18,
}

let exo1 = document.querySelector("#object").children
console.log(exo1)

let myElements = [exo1[0], exo1[1]]
console.log(myElements)

let tabProp = Object.values(myObject);
console.log(tabProp)

let i = 0;
for (const propriete in myObject){
    console.log(myObject[propriete])
    
    i++;
}

