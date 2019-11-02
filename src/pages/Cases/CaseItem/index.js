import React from 'react';

import {Container, Title, NumberContainer, NumberLabel, Number} from './styles';

function CaseItem({children}) {
  return (
    <Container>
      <Title>{children.title.toLowerCase()}</Title>
      <NumberContainer>
        <NumberLabel>Número</NumberLabel>
        <Number>{children.number}</Number>
      </NumberContainer>
    </Container>
  );
}

export default CaseItem;
