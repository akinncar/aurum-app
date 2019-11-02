import React from 'react';
import {TouchableOpacity} from 'react-native';
import {formatPrice} from '~/util/format';

import Details from './Details';
import History from './History';

import {
  Container,
  Header,
  TitleHeader,
  MaterialIcon,
  Body,
  TitleCase,
} from './styles';
import colors from '~/styles/colors';

function CaseDetail({navigation}) {
  const item = navigation.state.params.item;

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <MaterialIcon
            name="arrow-back"
            size={24}
            color={`${colors.primary}`}
          />
        </TouchableOpacity>
        <TitleHeader>Processo</TitleHeader>
        <TouchableOpacity onPress={() => {}}>
          <MaterialIcon
            name="insert-link"
            size={24}
            color={`${colors.primary}`}
          />
        </TouchableOpacity>
      </Header>
      <Body>
        <Details>{item}</Details>
        <History>{item.historicals}</History>
      </Body>
    </Container>
  );
}

export default CaseDetail;
