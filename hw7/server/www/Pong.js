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
    this.paddle1 = new Paddle({'x': 0, 'y': this.height/2-35,
                            'height': 70, 'width': 10,
                            'maxX': this.width, 'maxY': this.height});
    this.paddle2 = new Paddle({'x': this.width-10, 'y': this.height/2-35,
                            'height': 70, 'width': 10,
                            'maxX': this.width, 'maxY': this.height});
    
    this.initBall();
    this.socket = io.connect('http://128.237.190.136:3000/');

    this.socket.on('receive', function(data) {

        var paddle;

        if(data.player === 1){
            paddle = this.paddle1;
        } else{
            paddle = this.paddle2;
        }

        if(paddle!=undefined) {
            paddle.update(data.direction);
        }
    }.bind(this));
}

Pong.prototype.initCanvas = function(){
    this.body = $(document.body);
    this.body.width(document.body.offsetWidth);
    this.body.height(window.innerHeight - 20);
    this.width = this.body.width();
    this.height = this.body.height();
    this.canvas = $("#c");
    this.canvas.prop('width', this.width);
    this.canvas.prop('height', this.height);
    this.canvas.html("Your browser doesn't support canvas :(");
    this.page = new ScaledPage(this.canvas, this.width);

};

Pong.prototype.initBall = function(){
    this.ball = new Ball({'x': this.width/2, 'y': this.height/2,
                            'radius': 5,
                            'maxX': this.width, 'maxY': this.height});
    this.ball.velx = 5;
    this.ball.vely = 5;
}

//==============================================
//DRAWING
//==============================================

var count = 0;

Pong.prototype.draw = function(timeDiff){
    this.clearPage();
    this.drawBall(timeDiff);
    this.paddle1.draw(this.page);
    this.paddle2.draw(this.page);
}

Pong.prototype.clearPage = function(){
    this.page.fillRect(0, 0, this.width, this.height, 'black');
}

Pong.prototype.drawBall = function(timeDiff){
    if(!this.ball.update(timeDiff, this.paddle1, this.paddle2)){
        this.initBall();
    }
    this.ball.draw(this.page);
}
