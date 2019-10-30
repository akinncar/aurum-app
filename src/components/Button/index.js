import React from 'react';
import {ActivityIndicator} from 'react-native';

import colors from '~/styles/colors';

import {Container, Text, BackgroundButton} from './styles';

export default function Button({children, loading, ...rest}) {
  return (
    <BackgroundButton>
      <Container {...rest}>
        {loading ? (
          <ActivityIndicator size="small" color={colors.white} />
        ) : (
          <Text>{children}</Text>
        )}
      </Container>
    </BackgroundButton>
  );
}
