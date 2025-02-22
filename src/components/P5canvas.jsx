import { useEffect, useRef, useState } from "react";
import p5 from "p5";
import { playRandomNote,getPlayedNotes } from "../log/toneSetup.js";

const P5canvas = () => {
  const canvasRef = useRef(null);
  const [playedNotes , setPlayedNotes] = useState([]);

  useEffect(() => {
    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(600, 600).parent(canvasRef.current);
      };

      p.draw = () => {
        p.fill(255, 0, 0);
        p.ellipse(p.width / 2, p.height / 2, 50, 50);
      };

      p.mousePressed = () => {

        if(p.mouseX >= 0 && p.mouseX <= p.width && p.mouseY >= 0 && p.mouseY <= p.height){
          playRandomNote(); // called the function from the tone
          setPlayedNotes(getPlayedNotes()) ;
        }
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
      <h3>played notes</h3>
      <p>{playedNotes.join(", ")}</p>
    </div>
  );
};

export default P5canvas;
