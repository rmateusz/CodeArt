import {poolOfBall} from './balls/pool-of-balls';
import { twoBalls } from './balls/two-dots';
import { alhambra } from './others/alhambra';
import { drawingSketch } from './others/drawing-sketch';
import { poster1 } from './posters/poster1';
import { poster8 } from './posters/poster8';

export const sketchBooks = {
  animations: [
    poolOfBall,
    alhambra,
  ],
  balls: [
    poolOfBall
  ],
  interactive: [
    drawingSketch,
    twoBalls
  ],
  static: [
    poster1,
    poster8
  ]
};

export const allSketches = [
  poolOfBall,
  twoBalls,
  alhambra,
  drawingSketch,
  poster1,
  poster8
];
