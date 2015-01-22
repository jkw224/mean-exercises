// var request = new XMLHttpRequest();
// request.open('GET', 'http://increscent.org:9000/contacts');
// request.onreadystatechange = function() {
	
// 	//var res = JSON.parse(request.response);
// 	if(request.readyState == 4) {
// 		console.log("We recieved the message!")
// 	} else {
// 		console.log("We recieved the message!");
// 	}
// 	console.log(request);
// }
// request.send();

// var request = new XMLHttpRequest();

// request.open('Get', 'http://increscent.org:9000/contacts', true);

// request.onload = function() {
// 	var data = JSON.parse(request.response);
// };

// request.send();

// function get_request(url, callback){

// }

function get_request(url, callback){
	var request = new XMLHttpRequest();

	request.open('GET', url, true);

	request.onload = function() {
		callback(request.response);
	};
	request.send();
}

get_request('http://increscent.org:9000/contacts', function(contacts_response) {
	get_request('http://increscent.org:9000/messages', function(messages_response) {
		var contacts = JSON.parse(contacts_response);
		var messages = JSON.parse(messages_response);
				
		var html_messages = '';
		for(var i = 1; i < messages_response.length; i++){
			if(!messages[i]) continue;
			var id = messages[i].user_id;
			var contact_name = 'N/A'
			for (var key in contacts) {
				if(contacts[key].id === id) {
					contact_name = contacts[key].name;
				}
			}
			html_messages += '<p>' + contact_name + ': ' + messages[i].text + '</p>';
		}
		document.getElementById('messages').innerHTML = html_messages;
	});
});





