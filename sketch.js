function setup() {
  createCanvas (600,600);
  background("black");
}
function draw(){
 fill("red");
 stroke("blue");
  
if(mouseIsPressed){
  rect(mouseX,mouseY,20,35)
}
}
