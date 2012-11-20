
var Ball = function(config){
    this.style = config.style || 'white';
    this.radius = config.radius;

    this.damping = config.damping || 1;

    this.x = config.x;
    this.y = config.y;
    
    this.velx = 0;
    this.vely = 0;

    this.maxX = config.maxX;
    this.maxY = config.maxY;

}

Ball.prototype.update = function(timeDiff, paddle1, paddle2){
    this.x += this.velx*timeDiff/20;
    this.y += this.vely*timeDiff/20;

    if (this.x - this.radius < 0){
        if(this.y > paddle1.y && this.y < (paddle1.y + paddle1.height)){
            console.log("good");
            this.x = this.radius;
            this.velx = -this.velx/this.damping;
        }
        else{
            return false;
        }
    }
    else if(this.x + this.radius > this.maxX){
        if(this.y > paddle2.y && this.y < (paddle2.y + paddle2.height)){
            console.log("good");
            this.x = this.maxX - this.radius;
            this.velx = -this.velx/this.damping;
        }
        else{
            return false;
        }
    }
    if (this.y - this.radius < 0){
        this.y = this.radius;
        this.vely = -this.vely/this.damping;
    }
    else if (this.y + this.radius > this.maxY){
        this.y = this.maxY - this.radius;
        this.vely = -this.vely/this.damping;
    }
    return true;
}

Ball.prototype.draw = function(scaledPage){
    scaledPage.fillCircle(this.x, this.y, this.radius, this.style);
}


var Paddle = function(config){
    this.style = config.style || 'white';
    this.height = config.height;
    this.width = config.width;

    this.x = config.x;
    this.y = config.y;

    this.maxX = config.maxX;
    this.maxY = config.maxY;
}

Paddle.prototype.update = function(direction){
    if(direction === "up"){
        this.y-=10;
        if(this.y < 0){
            this.y = 0;
        }
    }
    else{
        this.y+=10;
        if(this.y + this.height > this.maxY){
            this.y = this.maxY - this.height;
        }
    }
}

Paddle.prototype.draw = function(scaledPage){
    scaledPage.fillRect(this.x, this.y, this.width, this.height, this.style);
}
