//https://kitsunekko.net/dirlist.php?dir=subtitles%2Fjapanese%2F

animeList = document.getElementsByTagName('tr')
var index = 0;

function serachAnime(index, animeName){
	window.open('https://www.google.com/search?q=Anime '+ animeName + '&tbm=isch', "_top ");
}

if(document.querySelector('#breadcrumbs').textContent.includes(' kitsunekko.net \n > Japanese subtitles > ') == false){
	for(var anime of animeList){
		anime.setAttribute('id', 'anime_'+index);
		
	    var animeName = anime.getElementsByTagName('strong')[0].textContent;
		
		animeName = animeName.replace('-', ' ');
		var regex = /[!?@#$%^&*():;+-=~{}<>\_\[\]\|\\\"\'\,\.\/\`\₩]/g;
		animeName = animeName.replace(regex, "");
	
		var addTag = document.createElement("button");
		addTag.setAttribute('onclick', 'serachAnime('+index+',"' + animeName + '")');
		addTag.innerHTML = "Search";
		anime.append(addTag);
		
		index = index +1;
	}
}