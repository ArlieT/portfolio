"use client";
import { useEffect, useState } from "react";

type Props = {
  //   render: (mouseX: number, mouseY: number) => JSX.Element;
};

const MouseTracker = ({ render }: Props) => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouseX(event.clientX);
      setMouseY(event.clientY);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div
      className="overlay-invert size-10 rounded-full bg-white"
      style={{ position: "absolute", left: mouseX + 25, top: mouseY - 80 }}
    >
      {/* {render(mouseX, mouseY)} */}
    </div>
  );
};

export default MouseTracker;
