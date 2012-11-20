// Make a connection to the socket.io server
	// This fires the "connection" event!!
	var socket = io.connect('http://128.237.134.186:3000/');
	var accelerometer = new Accelerometer();
    accelerometer.startListening();  


	$(document).ready(function() {
		setInterval(timer, 200);
	});

	function timer() {
		var movement = accelerometer.getLast();
		var direction;
		if (movement.y > 0 ){
			$("body").html("<h1>down</h1>");
			direction = "down";
		}
		else{
			$("body").html("<h1>up</h1>");
			direction = "up";
		}
		// emit to the server the "send" event, with our data object
		//alert(getDirection(accelerometer));
		socket.emit('send', {"player": 2, "direction": direction});
	}