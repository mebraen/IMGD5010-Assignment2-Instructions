//radius for each hexagon
let radius = 25

//Green is set randomly for each hexagon
let myRed = 255;
let myBlue = 0;

function setup() {
  createCanvas(400, 400);
  
  //increments to make hexagon grid pattern
  //not put at the top because of sqrt function
  let xIncrement = 2*radius*1.5
  let yIncrement = radius*sqrt(3)
  
  //create honeycomb hexagon grid
  honeycombGrid(0,0, xIncrement, yIncrement)
  honeycombGrid(xIncrement/2, yIncrement/2, xIncrement, yIncrement)
}

function drawHexagon() {
  beginShape() 
  
  //draw each vertext for a single hexagon
  for(let angle = 0; angle < TAU; angle+=TAU/6) {
    vertex(radius*cos(angle), radius*sin(angle))
  }
  
  endShape(CLOSE)
}

function honeycombGrid(xStart, yStart, xIncrement, yIncrement) {
  //while x and y are within the canvas
  for(let x = xStart; x <= width+xIncrement; x+=xIncrement) {
    for(let y = yStart; y <= height+yIncrement; y+=yIncrement) {
      
      //set green
      let myGreen = random(140,215);
      fill(color(myRed, myGreen, myBlue))
      
      //translate each hexagon to form honeycomb pattern
      translate(x,y)
      drawHexagon()
      resetMatrix()
    }
  }
}
