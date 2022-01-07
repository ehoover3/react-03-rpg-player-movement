import React from "react";
import Actor from "./Actor";
import m1 from "../images/m1.png";
import useKeyPress from "../hooks/useKeyPress";
import useWalk from "../hooks/useWalk";

export default function Player({ skin }) {
  const { dir, step, walk, position } = useWalk(3);
  const data = { h: 32, w: 32 };

  useKeyPress((e) => {
    walk(e.key.replace("Arrow", "").toLowerCase());
    e.preventDefault(); // prevents window from scrolling onKeyPress
  });

  return (
    <Actor sprite={m1} data={data} step={step} dir={dir} position={position} />
  );
}
