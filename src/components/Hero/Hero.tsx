import { useEffect, useState, useRef } from "react";
import { level1 } from "../../utils/levels";
import { Wrapper } from "./Hero.Styles";

const Hero = () => {
  const [keyPress, setKeyPress] = useState({ code: "" });
  const [position, setPosition] = useState({ x: 0, y: 95 });

  let timerId = useRef<NodeJS.Timeout | null>(null);

  const handleKeyPress = (e: any) => {
    clearTimeout(timerId.current as NodeJS.Timeout);
    setKeyPress({ code: e.code });
  };

  const handleKeyDown = () => {
    if (keyPress.code === "ArrowRight") {
      timerId.current = setTimeout(() => {
        for (const item of level1) {
          if (
            item.x <= position.x + 50 &&
            item.x + 80 > position.x &&
            item.y - 45 < position.y &&
            item.y + 80 > position.y
          ) {
            return setPosition((prev) => ({ ...prev }));
          }
        }

        setPosition((prev) => ({ ...prev, x: prev.x + 5 }));
        return handleKeyDown();
      }, 30);
    } else if (keyPress.code === "ArrowLeft") {
      for (const item of level1) {
        if (
          item.x <= position.x - 50 &&
          item.x + 80 >= position.x &&
          item.y - 45 <= position.y &&
          item.y + 80 > position.y
        ) {
          return setPosition((prev) => ({ ...prev }));
        }
      }

      return setPosition((prev) => {
        console.log(prev, "PREV");

        return { ...prev, x: prev.x - 5 };
      });
    } else if (keyPress.code === "ArrowUp") {
      for (const item of level1) {
        if (
          item.x < position.x + 50 && // 80 <= 160 - 10
          item.x + 80 > position.x && // 160 >= 160
          item.y <= position.y && // 240 <=    245
          item.y + 80 >= position.y // 320 > 245
        ) {
          return setPosition((prev) => ({ ...prev }));
        }
      }
      return setPosition((prev) => ({ ...prev, y: prev.y - 5 }));
    } else if (keyPress.code === "ArrowDown") {
      for (const item of level1) {
        if (
          item.x < position.x + 50 && // 80 <= 160 - 10
          item.x + 80 > position.x && // 160 >= 160
          item.y <= position.y + 50 && // 240 <=    245
          item.y + 80 > position.y // 320 > 245
        ) {
          return setPosition((prev) => ({ ...prev }));
        }
      }
      return setPosition((prev) => ({ ...prev, y: prev.y + 5 }));
    }
    return setPosition((prev) => ({ ...prev }));
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress, { once: true });
  }, [keyPress]);

  useEffect(() => handleKeyDown(), [keyPress]);

  return (
    <Wrapper x={position.x} y={position.y} onKeyPress={handleKeyDown}></Wrapper>
  );
};

export default Hero;
