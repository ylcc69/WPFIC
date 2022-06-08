/*
   World press freedom index of China project
   19th March 2022
*/

/*
   Updated in 11 May 2022
   Press freedom index 2022
   */

/*
   Updated in 08 June 2022
   Press freedom index 2022
   */

var freedomIdexChina = 175;
let x = 1500;
let stem_drawn = 0;
let img;
var resize;

function preload () {
  img = loadImage("window.png");
}

function setup() {
  setAttributes("antialias", true);
  createCanvas(windowWidth, windowHeight);
  background(25, 0, 255);
  frameRate(1000);
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
  image(img, windowWidth/2, windowHeight/2, windowWidth * resize, windowHeight * resize);

  fill(x / 5.2, 28, 255, 255);



  rectMode(RADIUS);
  translate(width / 2, height / 2);

  x = x - 5;

  if (x == -200) {
    noLoop();
  }

  rotate(x / random(3));
  //rotateZ(x / 31);
  scale(0.15);
  translate(x, 0, 0);
  rect(width / 2, height / 2, x - x / random(20, 40), x - 499);
  fill(x / 5.2, 28, 0, 255);

  print(x);
}
