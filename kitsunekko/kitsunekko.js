//https://kitsunekko.net/dirlist.php?dir=subtitles%2Fjapanese%2F

var index = 0;

var randomIndex = -1;

function serachAnime(index){
	var temp = document.getElementById('anime_' + index);
	var animeName = temp.childNodes[0].textContent.trim()
	
	window.open('https://www.google.com/search?q=Anime "'+ animeName + '"&tbm=isch', "_top ");
}

function searchRandomAnime(){
	randomIndex = Math.floor(Math.random() * index);
	serachAnime(randomIndex);
}

function getSubPageOfRandomAnime(){
	
	if(randomIndex != -1){
		
		var temp = document.getElementById('anime_' + randomIndex);
		var url = temp.childNodes[0].childNodes[0].href;
		window.open(url, "_blank ");
	}
	
}

if(document.querySelector('#breadcrumbs').textContent.includes(' kitsunekko.net \n > Japanese subtitles > ') == false){
	
	//create search button
	
	var animeList = document.getElementsByTagName('tr')
	
	
	for(var anime of animeList){
		anime.setAttribute('id', 'anime_'+index);
		
	    var animeName = anime.getElementsByTagName('strong')[0].textContent;
		
		animeName = animeName.replace('-', ' ');
		var regex = /[!?@#$%^&*():;+-=~{}<>\_\[\]\|\\\"\'\,\.\/\`\₩]/g;
		animeName = animeName.replace(regex, "");
	
		var addTag = document.createElement("button");
		addTag.setAttribute('onclick', 'serachAnime('+index+')');
		addTag.innerHTML = "Search";
		anime.append(addTag);
		
		index = index +1;
	}
	
	
	//create random button
	
	var temp = document.querySelector('#flisttable > tbody');
	
	var addTag = document.createElement("tr");
	
	
	var addTag2 = document.createElement("td");
	addTag2.style.textAlign = "center";
	addTag2.setAttribute('colspan', 3);
	
	var addTag3 = document.createElement("button");
		addTag3.setAttribute('onclick', 'searchRandomAnime()');
		addTag3.innerHTML = "Search Random Anime";
		
		addTag2.appendChild(addTag3)
		
	var addTag4 = document.createElement("button");
		addTag4.setAttribute('onclick', 'getSubPageOfRandomAnime()');
		addTag4.innerHTML = "Get sub page of RandoAnime";
		
		addTag2.appendChild(addTag4)
	
	addTag.appendChild(addTag2);
	
	temp.prepend(addTag);
}