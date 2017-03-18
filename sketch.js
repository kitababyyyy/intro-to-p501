function setup(){
    createCanvas(600,400);
    background(235, 244, 65);
}

function draw(){
    line(35,80,400,200);
    line(40,200,400,200);
    line(45,250,400,200);
    line(55,300,500,200);
    
    stroke(300,350,300);
    fill(0,0,0);
    rect(290,100,200,250);
    rect(400,100,200,250);
    
    stroke(0,0,0);
    strokeWeight(4);
    fill(255, 0, 119);
    ellipse(79,80,80,80);
    fill(0,208,255);
    ellipse(80,190,80,80);
    fill(244, 66, 203);
    ellipse(80,300,80,80);
    fill(255, 193, 71);
    ellipse(90,250,80,80);
}