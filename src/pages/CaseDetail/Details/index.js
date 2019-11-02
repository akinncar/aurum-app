import React from 'react';
import {formatPrice} from '~/util/format';

import {Container, InfoContainer, Label, Span, TitleCase} from './styles';

function Details({children}) {
  return (
    <Container>
      <TitleCase>{children.title}</TitleCase>
      <InfoContainer>
        <Label>Número</Label>
        <Span>{children.number}</Span>
      </InfoContainer>
      <InfoContainer>
        <Label>Cliente</Label>
        <Span>{children.customers[0].name}</Span>
      </InfoContainer>
      <InfoContainer>
        <Label>Parte</Label>
        <Span>{children.customers[0].roleName}</Span>
      </InfoContainer>
      <InfoContainer>
        <Label>Fórum</Label>
        <Span>{children.court}</Span>
      </InfoContainer>
      <InfoContainer>
        <Label>Valor</Label>
        <Span>{formatPrice(children.amount)}</Span>
      </InfoContainer>
      <InfoContainer>
        <Label>Anexo</Label>
        <Span>SE TIVER ANEXO VAI SER AQUI</Span>
      </InfoContainer>
    </Container>
  );
}

export default Details;
