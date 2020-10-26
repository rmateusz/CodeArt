export const twoBalls = (sketch: any, sketchId: string) => {
  let isChange = false;

  sketch.setup = () => {
    document.getElementById(sketchId).innerHTML = '';
    const canvas = sketch.createCanvas(sketch.windowWidth - 50, sketch.windowHeight - 50);
    canvas.parent(sketchId);

    sketch.background(0, 0, 33);
    sketch.smooth();
    sketch.noStroke();
    sketch.ball_01 = new Ball(sketch.width/2 - 200, sketch.height/2);
    sketch.ball_02 = new Ball(sketch.width/2 + 200, sketch.height/2);
    sketch.ball_03 = new Ball(sketch.width/2 - 500, sketch.height/2);
    sketch.ball_04 = new Ball(sketch.width/2 + 500, sketch.height/2);
  };

  sketch.draw = () => {
    sketch.fill(0,0,33,13);
    sketch.rect(0, 0, sketch.width, sketch.height);

    // our methods
    sketch.ball_01.oscillateY(0.06, 135);
    if(isChange){
        sketch.ball_01.oscillateDia(0.035, 90);
    } else {
        sketch.ball_01.oscillateX(0.095, 60);
    }
    sketch.ball_01.display();


    if(isChange){
      sketch.ball_02.oscillateY(0.06, 70);
      sketch.ball_02.oscillateDia(0.05, 75);
    } else {
      sketch.ball_02.oscillateDia(0.035, 135);
    }
    sketch.ball_02.display();
    sketch.ball_03.display();
    sketch.ball_04.display();

    sketch.fill(255);
    sketch.textSize(14);
    sketch.text('Press [ R ] ', 10, 20);
    sketch.text('Press [ M ]', 10, 50);
  };

  sketch.keyTyped = () => {
    if (sketch.key === 'r') {
      sketch.setup();
    }
    if (sketch.key === 'm') {
      isChange = !isChange;
    }
  }

    class Ball {
      x: number;
      y: number;
      dia: number;
      offDia: number;
      vx: number;
      vy: number;

      // The constructor enables the creation of objects.
      // ***!IMPORTANT!***
      constructor(_x, _y) {
        // Our class fields (global variables that belong to our class)
        this.x = _x;
        this.y = _y;
        this.dia = sketch.random(85, 275);
        this.offDia = 0;
        this.vx = 0;
        this.vy = 0;
      }

      // Next we define our methods
      display() {
        sketch.fill(255);
        //note the use of our fields (variables)
        sketch.ellipse(this.x + this.vx, this.y + this.vy, this.dia + this.offDia, this.dia + this.offDia);
      }

      // our various methods
      oscillateX(_freq, _amp) {
        this.vx = sketch.sin(sketch.frameCount * _freq) * _amp;
      }

      oscillateY(_freq, _amp) {
        this.vy = sketch.sin(sketch.frameCount * _freq) * _amp;
      }

      oscillateDia(_freq, _amp) {
          this.offDia = sketch.sin(sketch.frameCount * _freq) * _amp;
      }
    };
};
