import { type } from "os";
import styled from "styled-components";

type StylesProps = {
  x: number;
  y: number;
};

export const Wrapper = styled.div.attrs<StylesProps>(({ y, x }) => ({
  style: {
    top: y + "px",
    left: x + "px",
  },
}))<StylesProps>`
  height: 50px;
  width: 50px;
  position: absolute;

  background-color: #fff;
`;
