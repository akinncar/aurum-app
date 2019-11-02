import React, {forwardRef} from 'react';

import {Container, TInput} from './styles';

function InputSearch({style, ...rest}, ref) {
  return (
    <Container style={style}>
      <TInput {...rest} ref={ref} />
    </Container>
  );
}

export default forwardRef(InputSearch);
