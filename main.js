"use strict"

// TODO: Set up how many balls we want
let ballCount = 50; 
// TODO: Set up x and y position variable to equal an empty array
//TODO: Set up speed, size and color variable to equal an empty array
let x = [];
let y = [];
let xSpeed = [];
let ySpeed = [];
let size = [];
let r = [];
let g = [];
let b = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  // TODO: Create a for loop that iterates through i until it reaches the ball count value
  for (let i = 0; i < ballCount; i++)
  {
    // Inside the for loop:
    // TODO: Set x and y position to be the center
     // TODO: Set the speeds to be random

    // TODO: Set the size to be random

    // TODO: Set the colors to be random
    x[i] = width / 2; 
    y[i] = height / 2;
    xSpeed[i] = random(-5, 5);
    ySpeed[i] = random(5, -5);
    size[i] = random(10, 50);
    r[i] = random(0, 256);
    g[i] = random(0, 256);
    b[i] = random(0, 256);
}
}

function draw() {
  background(0, 50);
  
  // TODO: Iterate through a new for loop to change the properties in order to animate the balls
for (let i = 0; i < ballCount; i++)
{

  x[i] += xSpeed[i];
  y[i] += ySpeed[i];

  if (x[i] < 0 || x[i] > width) 
  {
    xSpeed[i] *= -1; //reverse speed
  }

   if (y[i] < 0 || y[i] > height) 
  {
    ySpeed[i] *= -1; //reverse speed
  }

  fill(r[i], g[i], b[i]);

  noStroke(ellipse(x[i], y[i], size[i], size[i]));
}

}
    // Inside the for loop:
    // TODO: Increment speed for x position

    // TODO: Increment speed for y position

    
    // TODO: Reverse x direction if ball hits left or right sides


    // TODO: Reverse y direction if ball hits top or bottom sides


    // TODO: Set random R, G, B values


    // TODO: Style to have no strokes


    // TODO: Draw the bouncing balls


