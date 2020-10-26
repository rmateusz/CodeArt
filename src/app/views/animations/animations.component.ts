import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import p5 from 'p5';
import { sketchBooks } from '../../sketch-books';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss']
})
export class AnimationsComponent implements OnInit {
  canvas: any;
  currentSketchNr = 0;
  pageSketches = sketchBooks.animations;
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
}
