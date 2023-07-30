var latest_s_users = [];
var is_first = true;

function send_msg(q_msg){
	document.querySelector('#chat-txt-message').value = q_msg;
	document.querySelector('#chat > div.chat-container > div.pusher-chat-widget-input > div.chat-text-box-icons > span.send-chat-button.icon-chevron').click();
}

function main2(){
	
	try{
		var q_users = document.getElementsByClassName('avatar-list')[0].getElementsByTagName('li');
		
		if(q_users.length >= 1){
		
			var s_users = []
			
			for (i = 0; i < q_users.length; i++) {
				if(q_users[i].style.display != 'none'){
					var nick = q_users[i].getElementsByClassName('username')[0].textContent;
					s_users.push(nick);
				}
			} 
			
			if(latest_s_users != null && !is_first){
				
				var enter_users = s_users.filter(it => !latest_s_users.includes(it));
				
				for (i = 0; i < enter_users.length; i++) {
					send_msg('알림: ' + enter_users[i] + ' 님이 입장 하였습니다.')
					//console.log(enter_users[i]);
				}
				
				var out_users = latest_s_users.filter(it => !s_users.includes(it));
				
				for (i = 0; i < out_users.length; i++) {
					send_msg('알림: ' + out_users[i] + ' 님이 퇴장 하였습니다.')
					//console.log(out_users[i]);
				}
				
			}
			
			
			latest_s_users = s_users;
			
			if(is_first){
				is_first = false;
			}
			
		}

	}catch{
		latest_s_users = null;
		is_first = true;
		console.log('error')
	}	
	
	
	
	setTimeout(main2, 100);
	
}


setTimeout(main2, 1000);

