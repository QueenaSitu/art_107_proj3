var sound1;
var sound2;
var sound3;
var sound4;
var sound5;
var sound6;
var sound7;

var gsquare;
var rcircle;
var basterisk;
var bcross;
var ystar;
var bhexagon;
var ptriangle;

var button;



function preload(){
  sound1=loadSound("control_temper2.mp3");
  sound2=loadSound("art_dogshit_2.mp3");
  sound3=loadSound("comprare_others2.mp3");
  sound4=loadSound("dont_attached.wav");
  sound5=loadSound("not_happiness2.mp3");
  sound6=loadSound("not_worth.wav");
  sound7=loadSound("stereotypes2.mp3");
  
  sound1.setVolume(0.75);
  sound2.setVolume(0.75);
  sound3.setVolume(0.75);
  sound4.setVolume(0.75);
  sound5.setVolume(0.75);
  sound6.setVolume(0.75);
  sound7.setVolume(0.75);
  
  gsquare=loadImage("square.png");
  rcircle=loadImage("circle.png");
  basterisk=loadImage("asterisk.png");
  bcross=loadImage("cross.png");
  ystar=loadImage("star.png");
  bhexagon=loadImage("hexagon.png");
  ptriangle=loadImage("triangle.png");

}

function setup() {
 createCanvas (windowWidth, windowHeight);
    textFont("Times");
  textSize(30);
  
  button = createButton("temper");
  button.position(100, 120);
  button.mousePressed(togglePlaying1);
  
    button = createButton("dogshit");
  button.position(690, 200);
  button.mousePressed(togglePlaying2);
  
    button = createButton("comparisons");
  button.position(270, 400);
  button.mousePressed(togglePlaying3);
  
    button = createButton("too attached");
  button.position(555, 645);
  button.mousePressed(togglePlaying4);
  
    button = createButton("unhappy");
  button.position(145, 820);
  button.mousePressed(togglePlaying5);
  
    button = createButton("not worthy");
  button.position(1175, 230);
  button.mousePressed(togglePlaying6);
  
    button = createButton("stereotypes");
  button.position(980, 615);
  button.mousePressed(togglePlaying7);
  
  
}

function togglePlaying1 () {
  sound1.loop();
}

function togglePlaying2 () {
  sound2.loop();
}

function togglePlaying3 () {
  sound3.loop();
}

function togglePlaying4 () {
  sound4.loop();
}

function togglePlaying5 () {
  sound5.loop();
}

function togglePlaying6 () {
  sound6.loop();
}

function togglePlaying7 () {
  sound7.loop();
}

function draw() {
 background(170);
  stroke(0);
  strokeWeight(3);
fill(0,255,100);
  text("click to play" , mouseX+5, mouseY-5);
  
  image (gsquare, 20, 20);
  image (rcircle, 200, 300);
  image (basterisk, 580, 90);
  image (bcross, 900, 500);
  image (ystar, 50, 700);
  image (bhexagon, 480, 550);
  image (ptriangle, 1100, 100);
}



