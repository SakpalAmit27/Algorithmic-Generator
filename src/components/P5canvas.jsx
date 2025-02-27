import { changeScale } from "../log/toneSetup.js";
import Canvas from "./canvas/Canvas.jsx";
import Stack from "../log/Stack.js";
import { useState } from "react";

const P5canvas = () => {
  const [noteStack, setNoteStack] = useState(new Stack());

  const handleScaleChange = (e) => {
    const newScale = e.target.value;
    changeScale(newScale);
    console.log(`Scale changed to: ${newScale}`);
  };

  const popNote = () => {
    if (!noteStack.isEmpty()) {
      const updateStack = new Stack();
      updateStack.container = [...noteStack.getStack()];
      updateStack.pop();
      setNoteStack(updateStack);
    } else {
      alert("Stack is empty!");
    }
  };

  return (
    <div style={styles.container}>
      <Canvas noteStack={noteStack} />

      <div style={styles.controls}>
        <select onChange={handleScaleChange} defaultValue={"D Major"} style={styles.select}>
          <option value="C Major">C Major</option>
          <option value="D Major">D Major</option>
          <option value="A Minor">A Minor</option>
          <option value="G Major">G Major</option>
        </select>
        
        <button onClick={popNote} style={styles.button}>Pop Note</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    padding: "20px",
  },
  controls: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },
  button: {
    backgroundColor: "#ff4757",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "0.3s",
  },
  select: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    cursor: "pointer",
  },
};

export default P5canvas;
