import styled from "styled-components";

type StylesProps = {
  x: number;
  y: number;
  type: string;
};

export const Wrapper = styled.div<StylesProps>`
  height: 80px;
  width: 80px;
  position: absolute;
  top: ${(props) => props.y + "px"};
  left: ${(props) => props.x + "px"};

  border-bottom: ${(props) =>
    props.type === "mid" ? "none" : "15px solid #1F5759 "};
  background-color: #01a2a6;
`;
