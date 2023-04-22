//프록시 서버에서의 코드(일본자막사이트는 한국 아이피로 못들어가기 때문에)
// https://www.proxysite.com/ 사이트에서 
// 일본자막사이트 로 가야하기 때문에
// 프록시 사이트의 url 공백에 일본자막 주소를 자동으로 기입해주게
input_url = setInterval(function() {
	try{
	url_input = document.querySelector('#url-form-wrap > form > div.row > input[type=text]');
	if(url_input.value == ''){
		url_input.value = 'https://kitsunekko.net/dirlist.php?dir=subtitles/japanese/';
	}
	}catch{}
	
}, 1000);


//일본 애니자막 사이트에서의 코드
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