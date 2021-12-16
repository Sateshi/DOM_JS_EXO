let myObject = {
    nom: 'nicolas',
    age: 18,
}

let exo1 = document.querySelector("#object")
console.log(exo1)

let myElements = Object.values(myObject)
console.log(myElements)

for (const property in myObject) {
    let i = 0;
    console.log(`${property}: ${myObject[property]}`);
    console.log(myElements[i])
    i++;
  }

