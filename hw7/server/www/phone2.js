// Make a connection to the socket.io server
// This fires the "connection" event!!
var socket = io.connect('http://128.237.190.136:3000/');
var accelerometer = new Accelerometer();
accelerometer.startListening();  


$(document).ready(function() {
	setInterval(timer, 50);
});

function timer() {
	var movement = accelerometer.getLast();
	var direction = getDirection(movement);
	$("body").html("<h1>"+direction+"</h1>");
	if (movement.y > 0 ){
		socket.emit('send', {"player": 2, "direction": direction});
	}
	else if(movement.y < 0 ){
		socket.emit('send', {"player": 2, "direction": direction});
	}
	
}