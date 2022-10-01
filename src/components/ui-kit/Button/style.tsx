import styled from "styled-components";

function ButtonSwitcher(
  type: number,
  value1: string,
  value2: string,
  value3: string
): string {
  switch (type) {
    case 0:
      return value1;
    case 1:
      return value2;
    case 2:
      return value3;
  }
  return "";
}

export const Container = styled.div`
  padding: ${(props) => props.padding || "7px 20px"};
  border-radius: 10px;
  cursor: ${(props) => props.style !== 2 ? "pointer" : ""};
  user-select: none;
  transition: all 0.3s;
  border: 2px solid transparent;
  position: relative;
  z-index: 2;
  color: ${(props) => ButtonSwitcher(props.style, "gray", "white", "darkgray")};

  &::after {
    content: "";
    position: absolute;
    top: ${(props) => ButtonSwitcher(props.style, "-2px", "0", "-2px")};
    height: 100%;
    left: ${(props) => ButtonSwitcher(props.style, "calc(100% + -2px)", "0", "0")};
    border: ${(props) =>
      ButtonSwitcher(
        props.style,
        "2px solid transparent",
        "0",
        "1px solid #707070"
      )};
    border-radius: 10px;
    z-index: -1;
    width: ${(props) => ButtonSwitcher(props.style, "0", "100%", "100%")};
    background: ${(props) => ButtonSwitcher(props.style, "0", "#8591FF", "#000000")};

    transition: all ease-in-out 0.2s;
  }

  &:hover {
    color: ${(props) => props.style !== 2 && "white"};
    &::after {
      width: 100%;
      left: 0;
      border-radius: ${(props) => props.style === 1 ? "0" : "10px"};
      border: ${(props) => ButtonSwitcher(props.style, "2px solid #8591FF", "0", "1px solid #707070")};
      width: 100%;
    }
  }

  &:active {
    color: ${(props) => props.style !== 2 && "black"};
    &::after {
      background: ${(props) => props.style !== 2 && "white"};
      width: 100%;
      height: 100%;
      left: 0;
      top: ${(props) => ButtonSwitcher(props.style, "0", "0", "-2px")};;
      border: ${(props) => props.style !== 2 && "0"};
    }
  }
`;
