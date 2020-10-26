export const poolOfBall = (sketch: any, sketchId: string) => {
  let theBalls = []; // an array of objects
  let numberOfBalls = 100;
  let isDrawing = false;
  const timeWaiting = 300;
  let timeCounter = 0;
  let ballsPartNumber = 1;

  sketch.setup = () => {
    sketch.frameRate(60);
    const canvas = sketch.createCanvas(sketch.windowWidth - 50, sketch.windowHeight - 50);
    canvas.parent(sketchId);

    sketch.background(0, 0, 0);
    sketch.smooth();
    sketch.rectMode(sketch.CENTER);
    numberOfBalls = 100;
    timeCounter = timeWaiting - 2;
  }

  sketch.draw = () => {
    sketch.background(0, 0, 0);
    timeCounter++;

    if(ballsPartNumber >= 10) {
      ballsPartNumber = 0;
      theBalls = [];
      return;
    }

    if(timeCounter > timeWaiting) {
      for (let i = numberOfBalls * (ballsPartNumber - 1); i < numberOfBalls * ballsPartNumber; i++) {
        theBalls[i] = new Ball();
      }

      timeCounter = 0;
      ballsPartNumber++;
    }

    // to read our array of objects and call methods on them, we also use a FOR loop
    for (let i = 0; i < theBalls.length; i++) {
      theBalls[i].display();
      theBalls[i].move();
      theBalls[i].check();
    }

    sketch.fill(255);
    sketch.textSize(14);
    sketch.text('', 10, 35);
    sketch.text('', 10, 50);
  }

  sketch.keyTyped = () => {
    if (sketch.key === 'r') {
      sketch.setup();
    }
    if (sketch.key === 'p') {
      isDrawing =!isDrawing;
    }
  }

  /////////////////////////// CLASS ///////////////////////
  class Ball {
    x: number;
    y: number;
    dia: number;
    offDia: number;
    vx: number;
    vy: number;
    myCol: any;

    // The constructor enables the creation of objects.
    // ***!IMPORTANT!***
    constructor() {
      // Our class fields (global variables that belong to our class)
      this.x = sketch.width / 2;
      this.y = sketch.height / 2;
      this.dia = sketch.random(5, 35);
      this.offDia = 0;
      this.vx = sketch.random(-3, 3);
      this.vy = sketch.random(-3, 3);
      this.myCol = sketch.color(sketch.random(33, 220), sketch.random(33, 220), sketch.random(93, 255));
    }

    // Next we define our methods
    display() {
      sketch.noStroke();
      sketch.fill(this.myCol);
      // note the use of our fields (variables)
      sketch.ellipse(this.x, this.y, this.dia + this.offDia, this.dia + this.offDia);
    }

    // A method to move the ball
    move() {
      this.x += this.vx;
      this.y += this.vy;
    }

    randomize() {
      let noiseOff = sketch.noise(sketch.frameCount+(this.x * 0.0015), sketch.frameCount+(this.y * 0.0015)) * 573;
      this.x += sketch.cos(noiseOff);
      this.y += sketch.sin(noiseOff);
    }

    oscillateDia(_freq, _amp) {
        this.offDia = sketch.sin(sketch.frameCount * _freq) * _amp;
    }

    // A method to test the ball's position
    check() {
      if (this.x < 0 + this.dia / 2) {
        this.vx *= -1;
      }
      if (this.x > sketch.width - this.dia / 2) {
        this.vx *= -1;
      }
      if (this.y < 0 + this.dia / 2) {
        this.vy *= -1;
      }
      if (this.y > sketch.height - this.dia / 2) {
        this.vy *= -1;
      }
    }
  };
};
