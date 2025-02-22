import { useEffect, useRef } from "react";
import p5 from "p5";
import * as Tone from 'tone'

// This consists of the canvas where the code will run
const P5canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const sketch = (p) => {

      // creating synth for playing notes // 

      let synth;

      p.setup = () => {
        p.createCanvas(600, 600).parent(canvasRef.current);
      };

      // creating while intializer // 

      synth = new Tone.Synth().toDestination();

      

      p.draw = () => {
        p.fill(255, 0, 0);
        p.ellipse(p.width / 2, p.height / 2, 50, 50);
        // p.background(100)
      };

    };

    const myP5 = new p5(sketch, canvasRef.current);

    return () => {
      myP5.remove();
    };
  }, []);

  return (
    <div style={{ width: "600px", height: "600px", border: "1px solid black" }}>
      <div ref={canvasRef}></div>
    </div>
  );
};

export default P5canvas;
