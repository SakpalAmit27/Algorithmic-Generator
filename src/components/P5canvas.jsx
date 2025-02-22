import { useEffect, useRef } from "react";
import p5 from "p5";

// This consists of the canvas where the code will run
const P5canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(600, 600).parent(canvasRef.current);
      };

      p.draw = () => {
        p.fill(255, 0, 0);
        p.ellipse(p.width / 2, p.height / 2, 50, 50);
        // p.background(100)
      };


      p.mousePressed = () => {
        playNote();
      }
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
