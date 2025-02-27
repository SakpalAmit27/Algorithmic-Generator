

import { changeScale } from "../log/toneSetup.js";
import Canvas from "./canvas/Canvas.jsx";
import Stack from "../log/Stack.js";
import { useState } from "react";



const P5canvas = () => {

  const [noteStack , setNoteStack] = useState(new Stack()); 


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
    }else{
      alert("stack is empty")
    }
  };
  

  return (
    <div style={{ width: "600px", height: "600px", border: "1px solid black" }}>


      <Canvas noteStack={noteStack}/>
      <select onChange={handleScaleChange} defaultValue={"D Major"}>
        <option value="C Major">C Major</option>
        <option value="D Major">D Major</option>
        <option value="A Minor">A Minor</option>
        <option value="G Major">G Major</option>
      </select>
      <button onClick={popNote}>pop note</button>
    </div>
  );
};

export default P5canvas;
