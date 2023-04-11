import React from "react";
import "./Palette.css";
export default function Palette() {
  const paletteStyling = {
    width: "30%",
    backgroundColor: "white",
    marginTop:"1%",
    marginRight: "1%",
    padding: "1%",
    display :"inline-block",

  };

  const colorPallette = {
    display: "flex",
    flexWrap: "wrap",
    position:"relative"
  };

  const colors = [
    "#E42313",
    "#fecd50",
    "#43aaa0",
    "#3d6266",
    "#9cbac7",
    "#2e2d88",
  ];


  return (
    <div style={paletteStyling}>
      <div className="heading">Select Options</div>
      <div className="color-pallette" style={colorPallette}>
        {colors.map((color) => (
          <div
            className="color-react"
            style={{
              backgroundColor: `${color}`,
              height: "100px",
              width: "180px",
              margin: "6% 1% 2% 7%",
            }}
          ></div>
        ))}
      </div>

      <div
        className="selection"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <p>Selected Option - </p>
        <input type="text" 
         style={{ width: "50%" }} />
      </div>
    </div>
  );
}