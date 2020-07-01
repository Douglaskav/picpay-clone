import React from "react";

import { Container, Title, Details, Img, Description } from "./styles";

import img from "../../images/13.png";

export default function Banner() {
  return (
    <Container>
      <Details>
        <Title>Cobre um amigo</Title>

        <Description>Mantenha suas parcerias em dia, use o PicPay para realizar suas cobranças.</Description>
      </Details>
      <Img source={img} />
    </Container>
  );
}