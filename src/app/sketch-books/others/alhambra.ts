import { randomInt } from 'src/app/utils/random';

export const alhambra = (sketch: any, sketchId: string) => {
  let numberOfSides: number;
  let xInterval: number;
  let yInterval: number;
  let thickness: number;
  let yParam = 0;
  let increase = true;

  sketch.setup = () => {
    const canvas = sketch.createCanvas(sketch.windowWidth - 200, sketch.windowHeight - 200);
    canvas.parent(sketchId);

    sketch.frameRate(60);
    sketch.background(0);
    sketch.smooth();
    sketch.strokeCap(sketch.SQUARE);
    numberOfSides = 4;
    xInterval = 150;
    yInterval = 150;
    thickness = 4.5;
  };

  sketch.draw = () => {
    sketch.background(0);
    sketch.noFill();

    if(yParam === 200) {
      increase = false;
    } else if (yParam === 0) {
      increase = true;
    }

    if(increase) {
      yParam++;
    } else {
      yParam--;
    }

    const polySize = sketch.map(100 + randomInt(0, 10), 0, sketch.width, xInterval / 2, xInterval);
    const my = sketch.map(yParam, 0, sketch.height, 0, sketch.TWO_PI);

    sketch.strokeWeight(thickness);

    for (let y = 75; y < sketch.height - 50; y += yInterval) {
      for (let x = 75; x < sketch.width - 50; x += xInterval) {
        sketch.push();
        sketch.translate(x, y);
        sketch.rotate(my);
        sketch.polygon(0, 0, numberOfSides, polySize, sketch.color(255));
        sketch.pop();

        sketch.push();
        sketch.translate(x, y);
        sketch.rotate(-my);
        sketch.polygon(0, 0, numberOfSides, polySize, sketch.color(255));
        sketch.pop();
      }
    }
  };

  sketch.polygon = (_x, _y, _numberOfSides, _sizes, _c) => {
    const radius = _sizes;
    const angle = sketch.TWO_PI / _numberOfSides;
    sketch.stroke(_c);
    sketch.beginShape();
    sketch.push();
    sketch.translate(_x, _y);
    for (let i = 0; i < _numberOfSides; i++) {
      const x = sketch.cos(angle * i) * radius;
      const y = sketch.sin(angle * i) * radius;

      sketch.vertex(x, y);
    }
    sketch.endShape(sketch.CLOSE);
    sketch.pop();
  }
}
