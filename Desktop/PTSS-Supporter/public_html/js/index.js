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
  
  function saveTextAsFile()
{
	var textToWrite = document.getElementById("inputTextToSave").value;
	var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
	var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;

	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.innerHTML = "Download File";
	if (window.webkitURL != null)
	{
		// Chrome allows the link to be clicked
		// without actually adding it to the DOM.
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	}
	else
	{
		// Firefox requires the link to be added to the DOM
		// before it can be clicked.
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}

	downloadLink.click();
}

function destroyClickedElement(event)
{
	document.body.removeChild(event.target);
}

function loadFileAsText()
{
	var fileToLoad = document.getElementById("fileToLoad").files[0];

	var fileReader = new FileReader();
	fileReader.onload = function(fileLoadedEvent) 
	{
		var textFromFileLoaded = fileLoadedEvent.target.result;
		document.getElementById("inputTextToSave").value = textFromFileLoaded;
	};
	fileReader.readAsText(fileToLoad, "UTF-8");
}

 