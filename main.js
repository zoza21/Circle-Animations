"use strict"

let ballCount = 50; 
let x = [];
let y = [];
let xSpeed = [];
let ySpeed = [];
let size = [];
let r = [];
let g = [];
let b = [];

function setup() 
{
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < ballCount; i++)
  {
    x[i] = width / 2;           //Set x position to be the center
    y[i] = height / 2;          //Set y position to be the center 
    xSpeed[i] = random(-5, 5);  //Set speed of x and y to be random
    ySpeed[i] = random(5, -5);
    size[i] = random(10, 50); Set the ball size to be random
    r[i] = random(0, 256); //Set colors to randomly generate 
    g[i] = random(0, 256);
    b[i] = random(0, 256);
  }
}

function draw() 
{
  background(0, 50); //set background color

    for (let i = 0; i < ballCount; i++)
    {
       x[i] += xSpeed[i];
       y[i] += ySpeed[i];

        if (x[i] < 0 || x[i] > width)  //If ball touches left or right sides, reverse the direction
        {
          xSpeed[i] *= -1; 
        }

        if (y[i] < 0 || y[i] > height) 
        {
        ySpeed[i] *= -1; ///If ball touches top or bottom sides, reverse the direction
        }
      
      fill(r[i], g[i], b[i]); //Fills the r, g, b arrays with random color values 

      noStroke(ellipse(x[i], y[i], size[i], size[i]));
  }
}
   


