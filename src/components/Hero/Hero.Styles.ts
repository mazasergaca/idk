import { type } from "os";
import styled from "styled-components";

type StylesProps = {
  x: number;
  y: number;
};

export const Wrapper = styled.div<StylesProps>`
  height: 50px;
  width: 50px;
  position: absolute;
  top: ${(props) => props.y + "px"};
  left: ${(props) => props.x + "px"};

  background-color: #fff;
`;
