var t;
var r;
var scl = 60;
var speed = 2;
let fontsize = 40;
var message = "hello world!"

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  textSize(fontsize);
  t = new SecretMessage(message);
  r = new Revealer();
}

function draw() {
  background(255);
  r.update();
  r.show();
  t.show();
}


function keyPressed(){
if(keyCode === UP_ARROW){
    r.dir(0, -1);
  } else if(keyCode === DOWN_ARROW){
    r.dir(0, 1);
  } else if(keyCode === RIGHT_ARROW){
    r.dir(1, 0);
  } else if(keyCode === LEFT_ARROW){
    r.dir(-1, 0);
  }
}

function SecretMessage(message){
  this.x = random(width-width/3);
  this.y = random(height-height/3);
  this.show = function(){
    fill(255);
    text(message, this.x, this.y)
  }
}

function Revealer(){
  this.x = width/2;
  this.y = height/2;
  this.xspeed = 0;
  this.yspeed = 0;
  this.dir = function(x, y){
    this.xspeed = x*speed;
    this.yspeed = y*speed;
  }
  this.update = function() {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
    
//Bouncing the rect at the edge of the screen
  if (this.x > width-scl || this.x < 0) {
    this.xspeed *= -1;
  }
  if (this.y > height-scl || this.y < 0) {
    this.yspeed *= -1;
  }
  }
  
  this.show = function(){
    fill(0);
    rect(this.x, this.y, scl, scl);
  }
}