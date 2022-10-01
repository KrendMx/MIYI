import styled, { keyframes } from "styled-components";

const transform = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(${`${Math.round(Math.random() * 16)}%`});
    }
    100% {
        transform: translateY(0),
    }
`;

export const Container = styled.div`
  color: ${(props) => props.color};
  position: relative;
  text-align: center;
  max-width: 100vw;
  overflow-x: hidden;
  min-height: 90vh;
`;

export const MainText = styled.h1`
  user-select: none;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  z-index: 4;
  line-height: 122px;
  font-size: 102px;
  margin: ${(props) => props.margin || "25px auto"};
  background: ${(props) =>
    props.color === "gradient"
      ? "-webkit-linear-gradient(90deg, #FE6783 1.9%, #FFBF84 97.1%);"
      : "white"};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 1400px) {
    font-size: 80px;
    line-height: 92px;
  }

  @media (max-width: 700px) {
    font-size: 60px;
    line-height: 72px;
  }
`;

export const Ball = styled.div`
  position: absolute;
  background: ${(props) =>
    props.light
      ? "#8591FF"
      : "linear-gradient(116.57deg, #FE6783 13.32%, #FFBF84 89.15%);"};
  width: ${(props) => props.size};
  border-radius: 100%;
  height: ${(props) => props.size};
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  z-index: -1;
  filter: ${(props) => (props.blur ? "blur(55px)" : "blur(5px)")};
  opacity: ${(props) => (props.blur ? "0.4" : "0.7")};
  animation: ${transform} infinite ease-in;
  animation-duration: ${(props) => props?.randomValue}s;
`;
