var Pong = function(){
    this.setup();
    window.util.deltaTimeRequestAnimationFrame(this.draw.bind(this));
}

//==============================================
//SETUP
//==============================================

Pong.prototype.setup = function(){
    window.util.patchRequestAnimationFrame();
    window.util.patchFnBind();
    this.initCanvas();
    TouchHandler.init(this);
    this.initBall();
    this.paddle1 = new Paddle({'x': 0, 'y': this.height/2,
                            'height': 40, 'width': 5,
                            'maxX': this.width, 'maxY': this.height})
    this.paddle2 = new Paddle({'x': this.width-5, 'y': this.height/2,
                            'height': 40, 'width': 5,
                            'maxX': this.width, 'maxY': this.height})
    this.initAccelerometer();
}

Pong.prototype.initCanvas = function(){
    this.body = $(document.body);
    this.body.width(document.body.offsetWidth);
    this.body.height(window.innerHeight - 20);
    this.width = 320;
    this.height = 480;
    this.canvas = window.util.makeAspectRatioCanvas(this.body, this.width/this.height);    
    this.page = this.canvas[0].getContext('2d');
};

Pong.prototype.initBall = function(){
    this.ball = new Ball({'x': this.width/2, 'y': this.height/2,
                            'radius': 20,
                            'maxX': this.width, 'maxY': this.height});
    this.ball.velx = 5;
    this.ball.vely = 5;
}

Pong.prototype.initAccelerometer = function(){
    this.accelerometer = new Accelerometer();
    this.accelerometer.startListening();
}

//==============================================
//DRAWING
//==============================================

Pong.prototype.draw = function(timeDiff){
    this.clearPage();
    this.drawBall(timeDiff);
    TouchHandler.drawBalls(timeDiff);
    this.updateBall();
}

Pong.prototype.clearPage = function(){
    this.page.fillRect(0, 0, this.width, this.height, '#eee');
}

Pong.prototype.drawBall = function(timeDiff){
    this.ball.update(timeDiff);
    this.ball.draw(this.page);
}

Pong.prototype.updateBall = function(){
    var lastAcceleration = this.accelerometer.getLast();
    this.ball.velx += lastAcceleration.x/8;
    this.ball.vely += lastAcceleration.y/8;

}
