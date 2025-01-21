"use strict";



function setup() {
    console.log("go");
    createCanvas(600, 600);
}

function draw() {
    if (mouseX <= width/3) {
        fill(255)
    } else {
        fill(50, 81, 168)
    }
    rect(0, 0, width / 3, height)


    if (mouseX > width/3 && mouseX <= ((width/3)*2)) {
        fill(255)
    } else {
        fill(61, 89, 166)
    }
    rect(width/3, 0, width / 3, height)

    if (mouseX >= ((width/3)*2)) {
        fill(255)
    } else {
        fill(75, 123, 166)
    }
    rect(width/3*2, 0, width / 3, height)
}
