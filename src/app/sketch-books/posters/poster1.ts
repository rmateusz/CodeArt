export const poster1 = (sketch: any, sketchId: string) => {
  const margin = 40;
  const itter = 10
  let radius: number;
  let step: number

  sketch.setup = () => {
    const canvas = sketch.createCanvas(sketch.windowWidth - 50, sketch.windowHeight - 50);
    canvas.parent(sketchId);
    sketch.pixelDensity(2)
    // createCanvas(400, 400)
    step = (sketch.width - margin * 2) / (itter - 1)
    sketch.noLoop()
  }

  sketch.draw = () => {
    sketch.background(0)
    sketch.fill(255);
    sketch.noStroke();
    for (let y = 0; y < itter; y++) {
      for (let x = 0; x < itter; x++) {
        radius = sketch.random(0, 10);
        sketch.ellipse(margin + x * step, margin + y * step, radius, radius);
      }
    }
  }
}
