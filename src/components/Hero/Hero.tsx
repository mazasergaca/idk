import React, { useEffect, useState } from "react";
import { Wrapper } from "./Hero.Styles";

const Hero = () => {
  const [position, setPosition] = useState({ x: 0, y: 95 });
  const handleKeyDown = (e: any) => {
    console.log(e);
    if (e.code === "ArrowRight") {
      return setPosition((prev) => ({ ...prev, x: prev.x + 10 }));
    }
    if (e.code === "ArrowLeft") {
      return setPosition((prev) => ({ ...prev, x: prev.x - 10 }));
    }
    if (e.code === "ArrowUp") {
      return setPosition((prev) => ({ ...prev, y: prev.y - 10 }));
    }
    if (e.code === "ArrowDown") {
      return setPosition((prev) => ({ ...prev, y: prev.y + 10 }));
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return <Wrapper x={position.x} y={position.y}></Wrapper>;
};

export default Hero;
