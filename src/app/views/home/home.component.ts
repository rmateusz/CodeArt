import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import p5 from 'p5';
// import { randomInt } from 'src/app/utils/random';
import { allSketches } from '../../sketch-books';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  canvas: any;
  sw = 2;
  c = [];
  strokeColor = 0;
  currentSketchNr = 0;
  pageSketches = allSketches;
  sketchId = 'sketch-holder';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    const currentSketch = this.pageSketches[this.currentSketchNr];
    const sketch = (s: any) => currentSketch(s, this.sketchId);
    this.canvas = new p5(sketch);
  }

  nextSketch = () => {
    if (this.currentSketchNr >= this.pageSketches.length -1) {
      this.currentSketchNr = 0;
    } else {
      this.currentSketchNr++;
    }

    const currentSketch = this.pageSketches[this.currentSketchNr];
    const sketch = (s: any) => currentSketch(s, this.sketchId);
    document.getElementById(this.sketchId).innerHTML = '';

    this.canvas = new p5(sketch);
  }

  prevSketch = () => {
    if (this.currentSketchNr <= 0) {
      this.currentSketchNr = this.pageSketches.length - 1;
    } else {
      this.currentSketchNr--;
    }

    const currentSketch = this.pageSketches[this.currentSketchNr];
    const sketch = (s: any) => currentSketch(s, this.sketchId);
    document.getElementById(this.sketchId).innerHTML = '';

    this.canvas = new p5(sketch);
  }

  getDotsPanel = (s: any) => {
    const sw = 2;
    const c = [];
    const strokeColor = 0;
    const radius = 16;
    let posY;
    let offset = 0;
    let offsetSpeed = 5;

    s.setup = () => {
      s.frameRate(10);
      s.background(20);
      let canvas2 = s.createCanvas(s.windowWidth - 300, s.windowHeight - 200);
      // creating a reference to the div here positions it so you can put things above and below
      // where the sketch is displayed
      canvas2.parent('sketch-holder');
    };

    s.draw = () => {
      let posY = 0;
      offset = offset + offsetSpeed;
      if (offset > s.windowWidth || offset < (-1 * s.windowWidth)) {
        offsetSpeed *= -1;
      }
      s.fill(s.color(0, 0, 0));
      s.rect(0, 0, s.width, s.height);


      while (posY < s.windowHeight) {
        for (let posX = 0; posX <= s.windowWidth; posX += radius) {
          s.noStroke();
          s.fill(s.color(0, 0, s.random(0, 255), s.random(0, 255) * 2));
          s.ellipse(posX + offset, posY, radius, radius);
        }
        posY += radius;
        // s.fill(s.color(0, 0, 0 ));
        // s.rect(0, 0, s.width, s.height);
      }
    };
  }

  getDrawingSketch = (s: any) => {
    const sw = 2;
    const c = [];
    const strokeColor = 0;

    s.setup = () => {
      let canvas2 = s.createCanvas(s.windowWidth - 100, s.windowHeight - 100);
      // creating a reference to the div here positions it so you can put things above and below
      // where the sketch is displayed
      canvas2.parent('sketch-holder');

      s.background(20);
      s.strokeWeight(this.sw);

      this.c[0] = s.color(148, 0, 211);
      this.c[1] = s.color(75, 0, 130);
      this.c[2] = s.color(0, 0, 255);
      this.c[3] = s.color(0, 255, 0);
      this.c[4] = s.color(255, 255, 0);
      this.c[5] = s.color(255, 127, 0);
      this.c[6] = s.color(255, 0, 0);

      // s.rect(0, 0, s.width, s.height);

      s.stroke(this.c[this.strokeColor]);
    };

    s.draw = () => {
      if (s.mouseIsPressed) {
        if (s.mouseButton === s.LEFT) {
          s.line(s.mouseX, s.mouseY, s.pmouseX, s.pmouseY);
        } else if (s.mouseButton === s.CENTER) {
          s.background(20);
        }
      }
    };

    s.mouseReleased = () => {
      // modulo math forces the color to swap through the array provided
      this.strokeColor = (this.strokeColor + 1) % this.c.length;
      s.stroke(this.c[this.strokeColor]);
      console.log(`color is now ${this.c[this.strokeColor]}`);
    };

    s.keyPressed = () => {
      if (s.key === 'c') {
        window.location.reload();
      }
    };
  };

  ngAfterViewInit() {
  }
}
