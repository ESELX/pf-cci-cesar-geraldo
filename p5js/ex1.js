function setup(){

  createCanvas(windowWidth,windowHeight);


}



function draw() {
  background(0);
  fill(255);
  stroke(hue,252, 3, 3);
  textSize(width / 50);
  text(dist(width/2, height/2, mouseX, mouseY),50,50);
  stroke(207, 252, 3);
  strokeWeight(30);
  fill(hue,207, 252, 3);
  line(windowWidth, height/2,0, height/2);
  line(width/2, height/2,mouseX,height/2);
  line(mouseX, mouseY,mouseX,height/2);



}
