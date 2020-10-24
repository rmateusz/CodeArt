import { Component, OnInit, Input } from '@angular/core';
import { SketchVisual } from 'src/app/model/sketch-visual';

@Component({
  selector: 'app-visualization-sketch',
  templateUrl: './visualization-sketch.component.html',
  styleUrls: ['./visualization-sketch.component.scss']
})
export class VisualizationSketchComponent implements OnInit {

  @Input() employee: SketchVisual = {
    description: [],
    config: {
      drawFunc: () => {},
      setupFunc: () => {}
    },
    title: ''
  };

  constructor() { }

  ngOnInit(): void {

  }

}
