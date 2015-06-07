function messageEmotie() {
alert("Hoe jij je vandaag voelt staat nu in je dagboek, je wordt nu doorgestuurd naar de homepagina.");
}

function bunnyPost(){
    var post = [
    "Ik richt mijn energie op de dingen die mij lukken",
    "Ik weet wat ik kan",
    "Ik gun mezelf regelmatig rustmomenten",
    "Ik weet wat goed voor mij is en handel daar ook naar",
    "Ik wens anderen alleen het goede toe",
    "Ik ben helemaal in het hier en nu",
    "Ik ben blij met elke stap voorwaarts",
    "Ik ben rustig en beheerst"];
    x = Math.floor((Math.random() * 7));
    
    alert(post[x]);
}	
        var links = document.querySelectorAll(".itemLinks");
        var wrapper = document.querySelector("#wrapper");
        
        
        var activeLink = 0;
        
        
        for (var i = 0; i < links.length; i++) {
            var link = links[i];
            link.addEventListener('click', setClickedItem, false);
            
            
            link.itemID = i;
        }

        
        links[activeLink].classList.add("active");

        function setClickedItem(e) {
            removeActiveLinks();

            var clickedLink = e.target;
            activeLink = clickedLink.itemID;
            
            changePosition(clickedLink);
        }
		
        function removeActiveLinks() {
            for (var i = 0; i < links.length; i++) {
                links[i].classList.remove("active");
            }
        }
        
       
		function changePosition(link) {
        	var position = link.getAttribute("data-pos");
            wrapper.style.left = position;
            
            link.classList.add("active");
        }