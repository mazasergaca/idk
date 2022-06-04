import React, { FC } from "react";
import { Wrapper } from "./Block.styles";

interface BlockI {
  x: number;
  y: number;
  type: string;
}

const Block: FC<BlockI> = ({ x, y, type }) => {
  return <Wrapper x={x} y={y} type={type}></Wrapper>;
};

export default Block;
