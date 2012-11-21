// Make a connection to the socket.io server
	// This fires the "connection" event!!
var socket = io.connect('http://128.237.190.136:3000/');
var accelerometer = new Accelerometer();
accelerometer.startListening();  

function hasSessionCookie(){
    var cookieArray = document.cookie.split(';');
    var cookies = {};
    for (var i = 0; i < cookieArray.length; i++){
        var parts = cookieArray[i].split('=');
        var key = parts[0].trim();
        var value = parts[1];
        cookies[key] = value;
    }
    //user will be an id if they're logged in
    return cookies['user'] !== 'none';
}

$(document).ready(function() {
	if (!hasSessionCookie()){
        window.location = "login.html";
    }
    else{
		setInterval(timer, 50);
    }
});

function timer() {
	var movement = accelerometer.getLast();
	var direction = getDirection(movement);
	$("body").html("<h1>"+direction+"</h1>");
	if (movement.y > 0 ){
		socket.emit('send', {"player": 1, "direction": direction});
	}
	else if(movement.y < 0 ){
		socket.emit('send', {"player": 1, "direction": direction});
	}
	
}