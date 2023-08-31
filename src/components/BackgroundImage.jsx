
import React from "react";
import styled from "styled-components";
import background from "../assets/login.jpg";

export default function BackgroundImage() {
  return (
    <Container>
      <img src={background} alt="background" />
    </Container>
  );
}

const Container = styled.div`
hight:100vh;
width:100vw;
img{
    hight:100vh;
    width:100vw;
}
`;