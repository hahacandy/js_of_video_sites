//프록시 서버에서의 코드(일본자막사이트는 한국 아이피로 못들어가기 때문에)
// https://*.proxysite.com/ 사이트에서 
// 일본자막사이트 로 가야하기 때문에
// 프록시 사이트의 url 공백에 일본자막 주소를 자동으로 기입해주게
input_url = setInterval(function() {
	try{
	url_input = document.querySelector('#url-form-wrap > form > div.row > input[type=text]');
	if(url_input.value == ''){
		url_input.value = 'https://kitsunekko.net/dirlist.php?dir=subtitles/japanese/';
		document.querySelector('#url-form-wrap > form > div.row > button').click();
	}
	}catch{}
	
}, 1000);


//일본 애니자막 사이트에서의 코드
//https://kitsunekko.net/dirlist.php?dir=subtitles%2Fjapanese%2F

var all_anime_num = new Array(); 

var index = 0;

var randomIndex = -1;
var currnet_ani_index = 0;

function serachAnime(index){
	var temp = document.getElementById('anime_' + index);
	var animeName = temp.childNodes[0].textContent.trim()
	
	window.open('https://www.google.com/search?q=Anime "'+ animeName + '"&tbm=isch',"1", "_top ");
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function searchPreviousRandomAnime(){
	if(randomIndex > 0){
		randomIndex = randomIndex - 1;
		currnet_ani_index = all_anime_num[randomIndex];
		serachAnime(currnet_ani_index);
	}
}

function searchNextRandomAnime(){
	if(randomIndex < all_anime_num.length){
		randomIndex = randomIndex + 1;
		currnet_ani_index = all_anime_num[randomIndex];
		serachAnime(currnet_ani_index);
	}
}

function getSubPageOfRandomAnime(){
	var temp = document.getElementById('anime_' + currnet_ani_index);
	var url = temp.childNodes[0].childNodes[0].href;
	window.open(url,"","_blank");
}

function SearchOnStreamingSite(){
	var temp = document.getElementById('anime_' + currnet_ani_index);
	var animeName = temp.childNodes[0].textContent.trim();
	window.open('https://animension.to/search?search_text='+ animeName,"1", "_top ");
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
		
		all_anime_num.push(index);  
		
		index = index +1;
	}
	
	shuffle(all_anime_num);
	
	
	//create random button
	
	var temp = document.querySelector('#flisttable > tbody');
	
	var addTag = document.createElement("tr");
	
	
	var addTag2 = document.createElement("td");
	addTag2.style.textAlign = "center";
	addTag2.setAttribute('colspan', 4);
	
	var temp_addTag = document.createElement("button");
	temp_addTag.setAttribute('onclick', 'searchPreviousRandomAnime()');
	temp_addTag.innerHTML = "Search Previous Random Anime";
	addTag2.appendChild(temp_addTag);
	
	var temp_addTag = document.createElement("button");
	temp_addTag.setAttribute('onclick', 'searchNextRandomAnime()');
	temp_addTag.innerHTML = "Search Next Random Anime";
	addTag2.appendChild(temp_addTag);
		
	var temp_addTag = document.createElement("button");
	temp_addTag.setAttribute('onclick', 'getSubPageOfRandomAnime()');
	temp_addTag.innerHTML = "Get sub page of RandoAnime";
	addTag2.appendChild(temp_addTag);
	
	var temp_addTag = document.createElement("button");
	temp_addTag.setAttribute('onclick', 'SearchOnStreamingSite('+index+')');
	temp_addTag.innerHTML = "Search anime on streaming site";
	addTag2.appendChild(temp_addTag);
	
	addTag.appendChild(addTag2);
	
	temp.prepend(addTag);
}
