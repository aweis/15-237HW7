var Player = function(id) {
	this.id = id;
}

Player.prototype.goUp = function(){
	if(this.id === 1){
		$("#playerone").html("up");
	} else{
	$("#playertwo").html("up");
	}
}

Player.prototype.goDown = function(){
	if(this.id === 1){
		$("#playerone").html("down");
	} else{
	$("#playertwo").html("down");
	}
}