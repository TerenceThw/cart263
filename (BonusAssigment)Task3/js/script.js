"use strict";

let squareSize = 50;
let r = 13;
let b = 234;
let g = 75;

let r3 = 0;
let g3 = 0;
let b3 = 0;

let square1X = 0;
let square1Y = 0;

let square2X = 0;
let square2Y = 0;

let square3X = 0;
let square3Y = 0;

function setup() {
    console.log("go");
    createCanvas(500, 500);
}

function mouseClicked() {
    square1X = random(0,500);
    square1Y = random(0,500);
}

function keyPressed() {
    if (key === ' ') {
        square2X = random(0, 500);
        square2Y = random(0, 500);
    }
}

function mouseMoved() {
    r3 = random(255)
    g3 = random(255)
    b3 = random(255)
}

function draw() {
    background(0);
    fill(r, g, b);
    // draw square 1
    rect(square1X,square1Y,squareSize);

    // square 2
    rect(square2X, square2Y, squareSize);

    // square 3
    square3Y += 3;
    if (square3Y + squareSize >= 500) {
        square3Y = 0
    }
    fill(r3,g3,b3)
    rect(square3X, square3Y, squareSize);

}