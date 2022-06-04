import React from "react";
import { level1 } from "../../../utils/levels";
import Block from "../../Block/Block";

const Level1 = () => {
  return (
    <div>
      {level1.map((item, index) => (
        <Block key={index} {...item} />
      ))}
    </div>
  );
};

export default Level1;
