import React from "react";
import { level1 } from "../../../utils/levels";
import Block from "../../Block/Block";
import Hero from "../../Hero/Hero";
import { Wrapper } from "./Level1.style";

const Level1 = () => {
  return (
    <Wrapper>
      {level1.map((item, index) => (
        <Block key={index} {...item} />
      ))}
      <Hero />
    </Wrapper>
  );
};

export default Level1;
