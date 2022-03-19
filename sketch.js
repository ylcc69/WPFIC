/*
   World press freedom index of China project
   19th March 2022
*/

var freedomIdexChina = 177;
let x = 1500;
let stem_drawn = 0;
let img;
var resize;

function preload () {
  img = loadImage("window.png");
}

function setup() {
  setAttributes("antialias", true);
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(255);
  frameRate(52);
  noStroke();
  noFill();
  //img = loadImage("window.png");
  imageMode(CENTER);
}



function draw() {
  //fill(255);
  //rectMode(CENTER);
  //rect(100, 100, 600, 600);
  resize = map(freedomIdexChina, 1, 180, 5, 1);
  image(img, 0, 0, windowWidth * resize, windowHeight * resize);

  fill(x / 5.2, 28, 255, 255);



  x = x - 10;

  if (x == 100) {
    noLoop();
  }

  rotateX(x / random(3));
  rotateZ(x / 31);
  scale(0.15);
  translate(x, 0, 0);
  box(10 + x - x / random(20, 50), x - 499);
  fill(x / 5.2, 28, 0, 255);

}
