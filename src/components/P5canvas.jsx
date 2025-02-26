

import { changeScale } from "../log/toneSetup.js";
import Canvas from "./canvas/Canvas.jsx";

const P5canvas = () => {

  const handleScaleChange = (e) => {
    const newScale = e.target.value;
    changeScale(newScale);
    console.log(`Scale changed to: ${newScale}`);
  };

  return (
    <div style={{ width: "600px", height: "600px", border: "1px solid black" }}>


      <Canvas/>
      <select onChange={handleScaleChange} defaultValue={"D Major"}>
        <option value="C Major">C Major</option>
        <option value="D Major">D Major</option>
        <option value="A Minor">A Minor</option>
        <option value="G Major">G Major</option>
      </select>
    </div>
  );
};

export default P5canvas;
