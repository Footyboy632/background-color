var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);
  btn_red=createButton("red");
  btn_red.position(50,100);
  btn_red.mousePressed(red_bg) 
 
  btn_green=createButton("green");
 btn_green.position(350,100);
btn_green.mousePressed(rb_green) 




}

function draw() {
  background(r,g,b);



}
function red_bg()
{

r=255
g=0
b=0

}
function rb_green(){

r=0
b=0
g=255

}

