// Make a connection to the socket.io server
	// This fires the "connection" event!!
	var socket = io.connect('http://128.237.134.186:3000/');
	var accelerometer = new Accelerometer();


	$(document).ready(function() {
		alert("hi1");
		setInterval(timer, 200);
	});

	function timer() {
		// emit to the server the "send" event, with our data object
		//alert(getDirection(accelerometer));
		socket.emit('send', {"player": 1, "direction": "up"});
	}