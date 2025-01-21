"use strict";
let x = 50;
let y =50;
let color =(50,50,50);

function setup() {
    console.log("go")
    createCanvas(500,500);
}

function draw() {
    background(0,0);
    fill(color);
    ellipse(x,y,x+50,y+50);
    fill(color+50);
    ellipse(x+100,y+100,x+10,y+10);
    fill(color+100);
    ellipse(x+150,y+150,x+30,y+30);
}