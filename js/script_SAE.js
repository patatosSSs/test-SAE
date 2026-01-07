let urlparams = new URLSearchParams(window.location.search)
let titre = urlparams.get('sae')


document.querySelector(".lien").innerHTML = SAE[titre]["titre"]
document.querySelector(".desc").innerHTML = SAE[titre]["description"]
document.querySelector(".comp").innerHTML = SAE[titre]["compétences"]



let apprentissages_critique = SAE[titre].AC;
let ressources = SAE[titre].ressources  ;



// Ajouter les apprentissages critiques
apprentissages_sae = "<a href='pdf/"+ titre +".pdf' target='_blank' class='acc'><h3>Apprentissages critiques :</h3><br>";

for (let num_ac in apprentissages_critique) {
  apprentissages_sae += " <div>"+ num_ac + " : "+ apprentissages_critique[num_ac] + "</div>";
}
apprentissages_sae += "</a>"


ressources_sae = "<div class='ress'><h3>Ressources :</h3>";
for (let num_ress in ressources) {
  ressources_sae += "<div class = ressources_sae>" +num_ress + " : "+ ressources[num_ress] + "</div>";
}
ressources_sae += "</div>"


document.querySelector(".container").innerHTML = apprentissages_sae;
document.querySelector(".container").innerHTML += ressources_sae;




