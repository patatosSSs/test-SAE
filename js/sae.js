console.log(SAE["SAE1.01"]["titre"]);
console.log(Object.keys(SAE))
let titre = Object.keys(SAE)
let table = ""
titre.forEach(function(element) 
{
    table = '<a href="pageSAE.html?sae='+element+'"><div class="gg">'+element +'<p>'+ SAE[element]["titre"]+'</div></a>   '
    document.querySelector(".lien").innerHTML += table
});
