"use strict";
 
const text_text = "test";
const text_size = 28;
const text_color = 255;

function setup() {
   createCanvas(600,600);
   textAlign(CENTER,CENTER);
   textSize(text_size);
}


function draw() {
  background(0);
  fill(text_color);
  text(text_text,width/2,height/2);

  for( let i=0; i<10;i++){
    const xPosition = i;
    const yPosition = i;
    text(i, 20+xPosition*20, yPosition+50-i);    //i add 20 on top on the posinion*20 so to make it look like the demo picture


  }

  for( let a=15; a>0; a--){
    const xPosition = a;
    const yPosition = a;
    text(a, xPosition+20-a, 60+yPosition*20);    //i add 60 on top on the yposition*20 so to make it look like the demo picture


  }
}





