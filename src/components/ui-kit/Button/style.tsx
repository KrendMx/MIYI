import styled from "styled-components";

export const Container = styled.div`
  padding: 7px 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s;
  border: 2px solid transparent;
  position: relative;
  z-index: 2;
  color: ${(props) => (props.style === 0 ? "white" : "#707070")};

  &::after {
    content: "";
    position: absolute;
    top: ${(props) => (props.style === 0 ? 0 : "-2px")};
    height: 100%;
    left: ${(props) => (props.style === 0 ? 0 : "calc(100% + -2px)")};
    border: ${(props) => (props.style === 0 ? 0 : "2px solid transparent")};
    border-radius: 10px;
    z-index: -1;
    width: ${(props) => (props.style === 0 ? "100%" : "0")};
    background: ${(props) => (props.style === 0 ? "#8591FF" : 0)};

    transition: all ease-in-out 0.4s;
  }

  &:hover {
    color: white;
    &::after {
      width: 100%;
      left: 0;
      border-radius: 0;
      border: ${(props) => props.style === 1 && "2px solid #8591FF"};
      width: 100%;
    }
  }
  &:active {
    color: black;
    &::after {
      background: white;
      color: black;
      border: 2px solid transparent;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      border: 0;
    }
  }
`;
