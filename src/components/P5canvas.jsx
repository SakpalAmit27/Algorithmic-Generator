import { useEffect, useRef } from "react";
import p5 from "p5";
import { playRandomNote } from "../log/toneSetup.js";

const P5canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const sketch = (p) => {
      let playedNotes = []; // Store notes inside p5

      p.setup = () => {
        p.createCanvas(600, 600).parent(canvasRef.current);
        p.noLoop(); // Prevent automatic looping
      };

      p.draw = () => {
        p.background(100);

        let centerX = p.width / 2;
        let centerY = p.height / 2;
        let radius = 200; // Distance from center @SakpalAmit27

        for (let i = 0; i < playedNotes.length; i++) {
          let note = playedNotes[i] || "N/A"; // @SakpalAmit27 : trying to fix the notes // 


          let angle = p.TWO_PI * (i / playedNotes.length);
          let x = centerX + radius * p.cos(angle);
          let y = centerY + radius * p.sin(angle);

          // Draw arrows pointer @SakpalAmit27 // 
          if (i > 0) {
            let prevAngle = p.TWO_PI * ((i - 1) / playedNotes.length);
            let prevX = centerX + radius * p.cos(prevAngle);
            let prevY = centerY + radius * p.sin(prevAngle);

            p.stroke(255);
            p.line(prevX, prevY, x, y);
          }

          // Circle renderer .. @SakpalAmit27//
          p.fill(255, 0, 0);
          p.ellipse(x, y, 40, 40);

          // Draw note labels inside circles
          p.fill(255); 
          p.textSize(20);
          p.textAlign(p.CENTER, p.CENTER);
          p.text(String(note), x, y); 
        }
      };

      p.mousePressed = async () => {
        if (p.mouseX >= 0 && p.mouseX <= p.width && p.mouseY >= 0 && p.mouseY <= p.height) {
          const newNote = await playRandomNote();  // note holder // 

          // debugging // 

          console.log("new note : ",newNote);

          if(typeof newNote === "string" && newNote.trim() !== ""){
            playedNotes.push(newNote); 

            console.log("debug playedNotes : ",playedNotes)
            p.redraw();  // implementd redraw to redraw the canvas cricle without the effect rendered /
          }else{
            console.log("playRandomNote() returned undefined")
          }
    
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
      <h3>Played Notes</h3>
    </div>
  );
};

export default P5canvas;
