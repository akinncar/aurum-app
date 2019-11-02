import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Container, Header, Title, MaterialIcon} from './styles';
import colors from '~/styles/colors';

function CaseDetail({navigation}) {
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
        <Title>Processo</Title>
        <TouchableOpacity onPress={() => {}}>
          <MaterialIcon
            name="insert-link"
            size={24}
            color={`${colors.primary}`}
          />
        </TouchableOpacity>
      </Header>
    </Container>
  );
}

export default CaseDetail;
