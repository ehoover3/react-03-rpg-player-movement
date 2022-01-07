import { useState } from "react";

export default function useWalk(maxSteps) {
  // variables
  const [position, setPosition] = useState({ x: 64, y: 64 });
  const [dir, setDir] = useState(0);
  const [step, setStep] = useState(0);
  const directions = {
    down: 0,
    left: 1,
    right: 2,
    up: 3,
  };
  const stepSize = 16;
  const modifier = {
    down: { x: 0, y: stepSize },
    left: { x: -stepSize, y: 0 },
    right: { x: stepSize, y: 0 },
    up: { x: 0, y: -stepSize },
  };

  // functions
  function walk(dir) {
    if (position.x < 8 && dir == "left") return; // left wall boundary
    if (position.x > 328 && dir == "right") return; // right wall boundary
    if (position.y < 8 && dir == "up") return; // top wall boundary
    if (position.y > 328 && dir == "down") return; // top wall boundary
    setDir((prev) => {
      console.log(position.x);
      console.log(dir);
      if (directions[dir] === prev) move(dir);
      return directions[dir];
    });
    setStep((prev) => (prev < maxSteps - 1 ? prev + 1 : 0));
  }

  function move(dir) {
    setPosition((prev) => ({
      x: prev.x + modifier[dir].x,
      y: prev.y + modifier[dir].y,
    }));
  }

  // jsx
  return {
    walk,
    dir,
    step,
    position,
  };
}
