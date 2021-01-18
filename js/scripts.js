// Refaire l'exercice sur les groupe en java script :
// A partir d'une liste de nom, je créé des groupes aléatoire
// Je réalise une page html pour intégrer ce module a ma page

console.log("Je suis dans le fichier Js")

// Déclaration d'une liste de plusieurs éléments

//sauvegarde de ma liste initiale
var myStudentsStatique = ["Josh", "Farouck", "Bernard","Bart","Marwa","Tiphaine","Rayan","Jojo","Jordan","Adlane","Maxime","Mouni","Biben","Maria","Carina","Morjane","Rachid","Mohamed","Thibault","Youcef","souad","David","Amin","Soufiane"];
//Liste de stockage pour creer mes groupes

//affichage de la liste complete de noms
console.log(myStudentsStatique)
//Nombre max d'élève par groupe
//var maxStudentsPerGroup = 2

/* Définition des variables qui von servir a afficher le text sur la page html*/
// Je sélection les élément qui ont l'id myGroupeList
const myGroupList = document.querySelector("#myGroupList")
const myH1 = document.createElement("h1")
const myP = document.createElement("p")

/* Définition des variables qui von servir a afficher le text sur la page html*/
// Je sélectionne les élément qui ont l'id myDynamicList
const myDynamicList = document.querySelector("#myDynamicList")
//Les élément que je vais .append qui auront la variable myH1List seront du type h1
const myH1List = document.createElement("h1")
const myPList = document.createElement("p")
const myPListStore = document.createElement("p")


let listNomsDynamiques = [];
var storedNames = []

/* Onclick j'ajoute le nom d'un element dans ma liste */

document.querySelector("#add").addEventListener("click", function() {
    let newName = document.querySelector("#nom").value;
    listNomsDynamiques.push(newName)
    myH1List.innerText = "Liste des élèves"
    myDynamicList.appendChild(myH1List)
    /* Affichage du groupe via la fonctionnalité .innerText */
    myPList.innerText = listNomsDynamiques
    myDynamicList.appendChild(myPList) 
    
    /*A tester demain, creer une liste depuis le local storage
    localStorage.setItem("listnom", JSON.stringify(listNomsDynamiques));
    console.log(localStorage.setItem)
    storedNames = JSON.parse(localStorage.getItem("listnom"));
    console.log(storedNames)*/

    localStorage.localList = [...listNomsDynamiques]
    //myPListStore.innerText = localStorage.localList
    //myDynamicList.appendChild(myPListStore)  
})

document.querySelector("#reloadList").addEventListener("click", function(){
    /*
    myPListStore.innerText = storedNames
    myDynamicList.appendChild(myPListStore) 
    console.log(localStorage.setItem)
    listNomsDynamiques = storedNames*/

    myPListStore.innerText = localStorage.localList
    myDynamicList.appendChild(myPListStore) 
    console.log(localStorage.localList)
    listNomsDynamiques = localStorage.localList
})




/* Onclick sur Creer groupe, j'affiche dans ma console les groupes que je créé a partir d'une liste définie */

document.querySelector("#groupe").addEventListener("click", groupeFactory)

function groupeFactory(){
    var count_group = 0
    var myStudents_groupe = []
    //var myStudents = [...myStudentsStatique];
    //console.log(myStudentsStatique)
    var myStudents = [...listNomsDynamiques];
    console.log(myStudents)
    maxStudentsPerGroup = document.querySelector("#maxNB").value;


    while (myStudents.length > maxStudentsPerGroup){
        myH1.innerText = "Groupes"       
        myGroupList.appendChild(myH1)
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
        count_group = count_group + 1
        myP.innerText += "\n" + count_group + ":"  + myStudents_groupe + "\n"
        myGroupList.appendChild(myP)
        console.log(myStudents_groupe)
        // Je vide ma variable de stockage de groupe
        myStudents_groupe.length = 0;
    }
    count_group = count_group + 1
    myP.innerText += "\n" + count_group + ":" + myStudents
    console.log(myStudents)
    myStudents.length = 0
    console.log(myStudents)
}

document.querySelector("#removeGroupe").addEventListener("click", function(){

        /*Tout effacer*/
        myGroupList.removeChild(myH1)
        myGroupList.removeChild(myP)
        /*
        let element = document.querySelector("...")
        let parent = document.querySelector("...")
        parent.removeChild(element)
        */

})