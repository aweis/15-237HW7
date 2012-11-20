var Player = function(id) {
	this.id = id;
}

Player.prototype.goUp = function(){
	console.log(this.id, "up");
}

Player.prototype.goDown = function(){
	console.log(this.id, "down");
}