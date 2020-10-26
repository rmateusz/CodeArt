export const poster8 = (sketch: any, sketchId: string) => {
  const itter = 16
  const margin = 40
  let step: number;

  sketch.setup = () => {
    const canvas = sketch.createCanvas(sketch.windowWidth - 50, sketch.windowHeight - 50);
    canvas.parent(sketchId);
    // createCanvas(640, 640)
    sketch.noLoop();
    step = (sketch.width - margin * 2) / itter;
  }

  sketch.draw = () => {
    sketch.background(0)
    for (let y = 0; y < itter; y++) {
      for (let x = 0; x < itter; x++) {
        sketch.push();
        sketch.translate(x * step + margin, y * step + margin)
        const pat = new Pattern(step);
        // 0 - half oval, 1 - straight, 2 - diagonal
        pat.create(0);
        sketch.pop();
      }
    }
  }

  class Pattern {
    width: number;
    height: number;
    step: number;
    arr0: number[];
    arr1: any[];
    arr2: any[];
    HALF_PI = 1.570796;
    PI = 3.141592;

    constructor(stepIn: number) {
      this.width = stepIn;
      this.height = stepIn;
      this.step = stepIn;
      this.arr0 = [0, this.HALF_PI, this.PI, this.PI + this.HALF_PI]
      this.arr1 = [[0, 0, this.step, 0], [this.step, 0, this.step, this.step], [this.step, this.step, 0, this.step], [0, this.step, 0, 0]]
      this.arr2 = [[0, 0, this.step, this.step], [0, this.step, this.step, 0]]
    }

    create(type) {
      sketch.noStroke();
      sketch.fill(255);
      sketch.push();

      switch (type) {
        case 0:
          let rRot = sketch.random(this.arr0);
          sketch.translate(this.width / 2, this.height / 2);
          sketch.rotate(rRot);
          sketch.arc(0, 0, this.width, this.height, 0, this.PI);
          break
        case 1:
          let rPar = sketch.random(this.arr1);
          sketch.stroke(255);
          sketch.strokeCap(sketch.PROJECT);
          sketch.strokeWeight(this.step / 5);
          sketch.line(rPar[0], rPar[1], rPar[2], rPar[3]);
          break
        case 2:
          let rPos = sketch.random(this.arr2);
          sketch.stroke(255);
          sketch.strokeCap(sketch.PROJECT);
          sketch.strokeWeight(this.step / 5);
          sketch.line(rPos[0], rPos[1], rPos[2], rPos[3]);
          break
        default:
          console.log('the switch is broken');
      }
      sketch.pop();
    }
  }

}
