import React, { useEffect, useRef } from 'react'
import p5 from 'p5'

// this consist of the canvas , that the code will run in (window)
const P5canvas = () => {

  const canvasRef = useRef(null);

  useEffect(()  => {

    const sketch = (p) => {
      // setting up the canvas // 
      p.setup = () => {
        p.createCanvas(600,600).parent(canvasRef.current);
      }; 


      // draw function , allows to draw unto the canvas // 

      p.draw = () => {
        p.background(330);
      }
    };


    // storing the completed sketch and sketch setup so far // 
    const myP5 = new p5(sketch,canvasRef.current);

  },[])

  return (
    <div>

    </div>
  )
}

export default P5canvas
