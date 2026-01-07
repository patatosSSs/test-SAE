let urlparams = new URLSearchParams(window.location.search)
let titre = urlparams.get('sae')
console.log(titre)

document.querySelector(".lien").innerHTML = SAE[titre]["titre"]
document.querySelector(".desc").innerHTML = SAE[titre]["description"]
document.querySelector(".comp").innerHTML = SAE[titre]["compétences"]


let table = "<div><h2>Apprentissage Critiques</h2></div>"
let AC = Object.keys(SAE[titre]["AC"])
console.log(AC)
AC.forEach(function(element) 
{
    document.querySelector(".acc").innerHTML += table
    table = "<a href='pdf/"+ titre +".pdf'><div>" + element +" "+ SAE[titre]["AC"][element] + "</div></a>"
});




let tabl = "<div><h2>Ressources</h2></div>"
let ress = Object.keys(SAE[titre]["ressources"])
console.log(ress)
ress.forEach(function(element) 
{
    document.querySelector(".ress").innerHTML += tabl
    tabl = "<div>" + element +" "+ SAE[titre]["ressources"][element] + "</div>"
    
});

