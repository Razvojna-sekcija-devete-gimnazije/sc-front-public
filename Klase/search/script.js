var button=document.getElementById("search-button");
var lista=[
    {naziv:"Stavka1",tag:["kivi,jabuka"]},
    {naziv:"Stavka2",tag:["banana,kruska"]},
    {naziv:"Stavka3",tag:["jagoda,ananas"]},
];

function buttonClick() {
    var text = document.getElementById("search-input").value.toLowerCase().trim();
    button.style.backgroundColor = "#cf1313";
    setTimeout(function() {
        button.style.backgroundColor = "";
    }, 200);
    var rezultati=lista.filter(function(stavka){
        return stavka.tag.some(function(t){
            return t.toLowerCase().includes(text);
        });
    });
    prikaziRezultate(rezultati);
}
function prikaziRezultate(rezultati){
    var resultsContainer=document.getElementById("search-results");
    resultsContainer.innerHTML="";

    if(rezultati.length===0){
        resultsContainer.innerHTML="<p>Nema rezultata.</p>";
        return;
    }

    rezultati.forEach(function(stavka){
        var p=document.createElement("p");
        p.textContent=stavka.naziv;
        resultsContainer.appendChild(p);
    })
}

var input=document.getElementById("search-input");
input.addEventListener("keypress",function(event){
    if(event.key==="Enter"){
        buttonClick();
    }
});