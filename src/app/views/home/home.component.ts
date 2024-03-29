import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import p5 from 'p5';
import { allSketches } from '../../sketch-books';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
}
