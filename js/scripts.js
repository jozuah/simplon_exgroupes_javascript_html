// Refaire l'exercice sur les groupe en java script :
// A partir d'une liste de nom, je créé des groupes aléatoire
// Je réalise une page html pour intégrer ce module a ma page

console.log("Je suis dans le fichier Js")

// Déclaration d'une liste de plusieurs éléments
var myStudents = ["Josh", "Farouck", "Bernard","Bart","Marwa"];
var myStudents_groupe = []
console.log(myStudents)
var maxStudentsPerGroup = 2


/* Version de David
let listNoms = [];
document.querySelector("#add").addEventListener("click", function() {
    let myName = document.querySelector("#nom").nodeValue;
    console.log(myName);
    listNoms.push(myName)
    console.log(listNoms)
})*/
console.log(myStudents.length)

/* Onclick sur Creer groupe, j'affiche dans ma console les groupes que je créé a partir d'une liste définie*/

document.querySelector("#groupe").addEventListener("click", function() {
    while (myStudents.length > maxStudentsPerGroup){
        for (i = 0; i < maxStudentsPerGroup; i++) {
            // Selectionner un random element dans ma liste "myStudents"
            const randomName = myStudents[Math.floor(Math.random() * myStudents.length)];
            //je cherche l'index de mon nom aléatoire
            const indexRandomName = myStudents.indexOf(randomName);
            //j'enlève l'élément de ma liste initiale
            if (indexRandomName > -1) {
                myStudents.splice(indexRandomName, 1);
            }
            const addName = myStudents_groupe.push(randomName)
        }
        console.log(myStudents_groupe)
        // Je vide ma variable de stockage de groupe
        myStudents_groupe.length = 0;
    }

    console.log(myStudents);
})
