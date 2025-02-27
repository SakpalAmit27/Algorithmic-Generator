import { useEffect, useRef } from "react";
import { playRandomNote } from "../../log/toneSetup";
import p5 from "p5";


const Canvas = ({noteStack}) => {
  const canvasRef = useRef(null);
  // const noteStack = new Stack();  // @SakpalAmit27 instance of stck // 

  useEffect(() => {
    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(600, 600).parent(canvasRef.current);
      };

      p.draw = () => {
        // Smooth gradient background
        for (let y = 0; y < p.height; y++) {
          let inter = p.map(y, 0, p.height, 0, 1);
          let c = p.lerpColor(p.color(30, 30, 60), p.color(10, 10, 40), inter);
          p.stroke(c);
          p.line(0, y, p.width, y);
        }

        let centerX = p.width / 2;
        let centerY = p.height / 2;
        let radius = 200;

        const playedNotes = noteStack.getStack();

        for (let i = 0; i < playedNotes.length; i++) {
          let note = playedNotes[i] || "N/A";
          let angle = p.TWO_PI * (i / playedNotes.length);
          let x = centerX + radius * p.cos(angle);
          let y = centerY + radius * p.sin(angle);

          if (i > 0) {
            let prevAngle = p.TWO_PI * ((i - 1) / playedNotes.length);
            let prevX = centerX + radius * p.cos(prevAngle);
            let prevY = centerY + radius * p.sin(prevAngle);
            p.stroke(255, 150);
            p.strokeWeight(2);
            p.line(prevX, prevY, x, y);
          }

          // Glowing note effect
          p.noStroke();
          p.fill(255, 100, 100, 180);
          p.ellipse(x, y, 50, 50);

          p.fill(255);
          p.textSize(20);
          p.textAlign(p.CENTER, p.CENTER);
          p.text(String(note), x, y);
        }
      };

      p.mousePressed = async () => {
        if (p.mouseX >= 0 && p.mouseX <= p.width && p.mouseY >= 0 && p.mouseY <= p.height) {
          const newNote = await playRandomNote();
          if (typeof newNote === "string" && newNote.trim() !== "") {
            noteStack.push(newNote); 
            p.redraw();
          }
        }
      };
    };

    const myP5 = new p5(sketch, canvasRef.current);

    return () => myP5.remove();
  }, [noteStack]); 

  return <div ref={canvasRef}></div>;
};

export default Canvas;
