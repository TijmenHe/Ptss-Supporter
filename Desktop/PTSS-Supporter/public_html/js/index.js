function messageEmotie() {
alert("hoe jij je vandaag voelt staat nu in je dagboek, je wordt nu doorgestuurd naar de homepagina");
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