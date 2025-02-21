import React, { useEffect, useRef } from 'react'
import p5 from 'p5'

// this consist of the canvas , that the code will run in (window)
const P5canvas = () => {

  const canvasRef = useRef(null);

  useEffect(()  => {

    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(600,600).parent(canvasRef.current);
      }
    }
    
  },[])

  return (
    <div>

    </div>
  )
}

export default P5canvas
