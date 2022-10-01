import React from "react";
import { h } from "preact";
import { Ball, Container, MainText } from "./styles";
import Typography from "../../../components/ui-kit/Typography";

const Heroes: React.FC = () => {
  return (
    <Container color="white">
      <MainText margin="90px 0 0px">Best De-Fi System all</MainText>
      <MainText color="gradient" margin="0">
        So you don't lose them.
      </MainText>
      <Typography value={"Turn your audience into email and text message subscribers."} />
      <div>
        <Ball
          size="270px"
          left="90%"
          top="10%"
          blur
          randomValue={Math.round(Math.random() * 5) + 3}
        />
        <Ball
          size="250px"
          left="15%"
          top="40%"
          light
          randomValue={Math.round(Math.random() * 5) + 3}
        />
        <Ball
          size="50px"
          left="15%"
          top="10%"
          randomValue={Math.round(Math.random() * 5) + 3}
        />
        <Ball
          size="80px"
          left="65%"
          top="5%"
          light
          randomValue={Math.round(Math.random() * 5) + 3}
        />
        <Ball
          size="200px"
          left="75%"
          top="40%"
          randomValue={Math.round(Math.random() * 5) + 3}
        />
        <Ball
          size="512px"
          left="25%"
          top="5%"
          blur
          randomValue={Math.round(Math.random() * 5) + 3}
        />
        <Ball
          size="512px"
          left="-15%"
          top="5%"
          blur
          light
          randomValue={Math.round(Math.random() * 5) + 3}
        />
        <Ball
          size="400px"
          blur
          left="55%"
          top="20%"
          light
          randomValue={Math.round(Math.random() * 5) + 3}
        />
      </div>
    </Container>
  );
};

export default Heroes;
