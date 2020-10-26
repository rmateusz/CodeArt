export const drawingSketch = (sketch: any, sketchId: string) => {
  const sw = 2;
  const c = [];
  let strokeColor = 0;

  sketch.setup = () => {
    const canvas2 = sketch.createCanvas(sketch.windowWidth - 50, sketch.windowHeight - 50);
    // creating a reference to the div here positions it so you can put things above and below
    // where the sketch is displayed
    canvas2.parent(sketchId);

    sketch.background(255);
    sketch.strokeWeight(sw);

    c[0] = sketch.color(148, 0, 211);
    c[1] = sketch.color(75, 0, 130);
    c[2] = sketch.color(0, 0, 255);
    c[3] = sketch.color(0, 255, 0);
    c[4] = sketch.color(255, 255, 0);
    c[5] = sketch.color(255, 127, 0);
    c[6] = sketch.color(255, 0, 0);

    sketch.rect(0, 0, sketch.width, sketch.height);
    sketch.stroke(c[strokeColor]);
  };

  sketch.draw = () => {
    if (sketch.mouseIsPressed) {
      if (sketch.mouseButton === sketch.LEFT) {
        sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
      } else if (sketch.mouseButton === sketch.CENTER) {
        sketch.background(20);
      }
    }
  };

  sketch.mouseReleased = () => {
    // modulo math forces the color to swap through the array provided
    strokeColor = (strokeColor + 1) % c.length;
    sketch.stroke(c[strokeColor]);
    console.log(`color is now ${c[strokeColor]}`);
  };

  sketch.keyPressed = () => {
    if (sketch.key === 'c') {
      window.location.reload();
    }
  };
};
