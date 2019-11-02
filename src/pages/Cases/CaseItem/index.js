import React from 'react';

import {Container, Title, InfoContainer, Label, Span} from './styles';

function CaseItem({children}) {
  return (
    <Container>
      <Title>{children.title}</Title>
      <InfoContainer>
        <Label>Número</Label>
        <Span>{children.number}</Span>
      </InfoContainer>
    </Container>
  );
}

export default CaseItem;
