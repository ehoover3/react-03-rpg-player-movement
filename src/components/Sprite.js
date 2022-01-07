import React from "react";

export default function Sprite({ image, data, position }) {
  const { y, x, h, w } = data;
  return (
    <div
      style={{
        position: "absolute",
        top: position.y,
        left: position.x,
        height: `${h}px`, // 24px
        width: `${w}px`, // 24px
        backgroundImage: `url(${image})`, //spritesheet
        backgroundRepeat: "no-repeat",
        backgroundPosition: `-${x}px -${y}px`, //-268px -185px
        outline: "1px solid black", // delete this line later
      }}
    ></div>
  );
}
