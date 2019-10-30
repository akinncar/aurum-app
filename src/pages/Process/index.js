import React from 'react';

import {Container, Header, TitleHome} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5';

import colors from '../../styles/colors';

export default function Process() {
  return (
    <Container resizeMode="contain">
      <Header>
        <TitleHome>Processos</TitleHome>
        <Icon name="search" size={22} color={`${colors.primary}`} />
      </Header>
    </Container>
  );
}
