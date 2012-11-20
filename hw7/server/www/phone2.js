// Make a connection to the socket.io server
// This fires the "connection" event!!
var socket = io.connect('http://128.237.218.85:3000/');
var accelerometer = new Accelerometer();
accelerometer.startListening();  


$(document).ready(function() {
	setInterval(timer, 200);
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