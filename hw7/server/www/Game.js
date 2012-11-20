var movementStack;
var neutral;

function getDirection(movement){

	if(movementStack == undefined){
		alert("init");
		movementStack = [];
		neutral = movement;
	}

	movementStack.push(movement);

	var x = movementStack[movementStack.length-1].x;
	var y = movementStack[movementStack.length-1].y;

	var xDiff = neutral.x - x;
	var yDiff = neutral.y - y;

	if(xDiff > 1 || yDiff > 1 || xDiff < -1 || yDiff <-1){
		if(yDiff > 0){
			return "up";
		}
		else if(yDiff < 0){
			return "down";
		}
	}

	else if(xDiff < .2 || yDiff < .2 || xDiff > -.2 || yDiff >-.2){
		movementStack = [];
	}

	return movement.x + " " + movement.y;
}