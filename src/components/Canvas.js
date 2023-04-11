import "./canvas.css";
import React, { useRef,useState, useEffect } from 'react';
// import Toolbox from "./Toolbox";

const Canvas = () => {


  const canvasRef = useRef(null);
  const [isPainting, setIsPainting] = useState(false);
  const [mousePosition, setMousePosition] = useState(undefined);

  
  

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'white';
    canvas.style.border = " solid gray 1px"
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

    const startPaint = (event) => {
    const coordinates = getCoordinates(event);
    if (coordinates) {
      setIsPainting(true);
      setMousePosition(coordinates);
    }
  };

  const stopPaint = () => {
    setIsPainting(false);
    setMousePosition(undefined);
  };

  const paint = (event) => {
    if (isPainting) {
      const newMousePosition = getCoordinates(event);
      if (mousePosition && newMousePosition) {
        drawLine(mousePosition, newMousePosition);
        setMousePosition(newMousePosition);
      }
    }
  };

  const getCoordinates = (event) => {
    if (!canvasRef.current) {
      return;
    }
    const canvas = canvasRef.current;
    return { x: event.pageX - canvas.offsetLeft, y: event.pageY - canvas.offsetTop };
  };

  const drawLine = (originalMousePosition, newMousePosition) => {
    if (!canvasRef.current) {
      return;
    }
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 2;
    context.moveTo(originalMousePosition.x, originalMousePosition.y);
    context.lineTo(newMousePosition.x, newMousePosition.y);
    context.stroke();
  };

  return (
    
    <div className="canvas-container">
     
      {/* <Toolbox/>   */}
    <canvas ref={canvasRef} className="responsive-canvas"
   
    onMouseDown={startPaint}
          onMouseUp={stopPaint}
          onMouseMove={paint} />
        
  </div>
  );

};

export default Canvas;
//  import ColumnCardGrid from "./ColumnCardGrid";
// const Paint = () => {
//   const [isPainting, setIsPainting] = useState(false);
//   const [mousePosition, setMousePosition] = useState(undefined);
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext('2d');
//     const resizeCanvas = () => {
//       canvas.width = 897;
//       canvas.height = 642;
//       canvas.style.border = "solid black 1px"


//     };
//     window.addEventListener('resize', resizeCanvas);
//     resizeCanvas();

//     return () => window.removeEventListener('resize', resizeCanvas);
//   }, []);

//   const startPaint = (event) => {
//     const coordinates = getCoordinates(event);
//     if (coordinates) {
//       setIsPainting(true);
//       setMousePosition(coordinates);
//     }
//   };

//   const stopPaint = () => {
//     setIsPainting(false);
//     setMousePosition(undefined);
//   };

//   const paint = (event) => {
//     if (isPainting) {
//       const newMousePosition = getCoordinates(event);
//       if (mousePosition && newMousePosition) {
//         drawLine(mousePosition, newMousePosition);
//         setMousePosition(newMousePosition);
//       }
//     }
//   };

//   const getCoordinates = (event) => {
//     if (!canvasRef.current) {
//       return;
//     }
//     const canvas = canvasRef.current;
//     return { x: event.pageX - canvas.offsetLeft, y: event.pageY - canvas.offsetTop };
//   };

//   const drawLine = (originalMousePosition, newMousePosition) => {
//     if (!canvasRef.current) {
//       return;
//     }
//     const canvas = canvasRef.current;
//     const context = canvas.getContext('2d');
//     context.beginPath();
//     context.strokeStyle = 'black';
//     context.lineWidth = 2;
//     context.moveTo(originalMousePosition.x, originalMousePosition.y);
//     context.lineTo(newMousePosition.x, newMousePosition.y);
//     context.stroke();
//   };


  

//   return (
//     <div className = "can">
//     <canvas
//       ref={canvasRef}
//       onMouseDown={startPaint}
//       onMouseUp={stopPaint}
//       onMouseMove={paint}
//     />
//     </div>
//   );
// };

// export default Paint;