import React from 'react';

import {Container, Text} from './styles';

export default function Title({children, ...rest}) {
  return (
    <Container {...rest}>
      <Text>{children}</Text>
    </Container>
  );
}
