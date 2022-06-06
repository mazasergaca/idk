import { useEffect, useState, useRef } from "react";
import { level1 } from "../../utils/levels";
import { Wrapper } from "./Hero.styles";

const Hero = () => {
  const [keyPress, setKeyPress] = useState({ code: "" });
  const [keyPress2, setKeyPress2] = useState({ code: "" });
  const [position, setPosition] = useState({ x: 0, y: 95 });

  let timerId = useRef<NodeJS.Timeout | null>(null);

  const handleKeyPress = (e: any) => {
    clearTimeout(timerId.current as NodeJS.Timeout);
    setKeyPress({ code: e.code });
    setKeyPress2({ code: e.code });
  };

  const handleKeyDown = () => {
    if (keyPress.code === "ArrowRight") {
      timerId.current = setTimeout(() => {
        for (const item of level1) {
          if (
            (item.x <= position.x + 50 &&
              item.x + 80 > position.x &&
              item.y - 45 <= position.y &&
              item.y + 80 > position.y) ||
            position.x + 50 + 1 > 1200 // current left position + width hero + 1px > > width game field
          ) {
            return clearTimeout(timerId.current as NodeJS.Timeout);
          }
        }
        setKeyPress2({ code: "ArrowRight" });
        return setPosition((prev) => ({ ...prev, x: prev.x + 5 }));
      }, 30);
    } else if (keyPress.code === "ArrowLeft") {
      timerId.current = setTimeout(() => {
        for (const item of level1) {
          if (
            (item.x <= position.x - 50 &&
              item.x + 80 >= position.x &&
              item.y - 45 <= position.y &&
              item.y + 80 > position.y) ||
            position.x - 1 < 0 // current left position - 1px < starts width game field
          ) {
            return clearTimeout(timerId.current as NodeJS.Timeout);
          }
        }
        setKeyPress2({ code: "ArrowLeft" });
        return setPosition((prev) => ({ ...prev, x: prev.x - 5 }));
      }, 30);
    } else if (keyPress.code === "ArrowUp") {
      timerId.current = setTimeout(() => {
        for (const item of level1) {
          if (
            (item.x < position.x + 50 && // 80 <= 160 - 10
              item.x + 80 > position.x && // 160 >= 160
              item.y <= position.y && // 240 <=    245
              item.y + 80 >= position.y) || // 320 > 245
            position.y - 1 < 0 // current top position - 1px < starts height game field
          ) {
            return clearTimeout(timerId.current as NodeJS.Timeout);
          }
        }
        setKeyPress2({ code: "ArrowUp" });
        return setPosition((prev) => ({ ...prev, y: prev.y - 5 }));
      }, 30);
    } else if (keyPress.code === "ArrowDown") {
      timerId.current = setTimeout(() => {
        for (const item of level1) {
          if (
            (item.x < position.x + 50 && // 80 <= 160 - 10
              item.x + 80 > position.x && // 160 >= 160
              item.y <= position.y + 50 && // 240 <=    245
              item.y + 80 > position.y) || // 320 > 245
            position.y + 50 + 1 > 720 // current top position + width hero - 1px > height game field
          ) {
            return clearTimeout(timerId.current as NodeJS.Timeout);
          }
        }
        setKeyPress2({ code: "ArrowDown" });
        return setPosition((prev) => ({ ...prev, y: prev.y + 5 }));
      }, 30);
    }
    return;
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress, { once: true });
  }, [keyPress]);

  useEffect(() => handleKeyDown(), [keyPress2]);

  return (
    <Wrapper
      initial={{ top: position.y, left: position.x, rotate: 0 }}
      animate={{
        top: position.y,
        left: position.x,
        rotate: position.x + position.y,
      }}
      transition={{ ease: "linear" }}
    ></Wrapper>
  );
};

export default Hero;
