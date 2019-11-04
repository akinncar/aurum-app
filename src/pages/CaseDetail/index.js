import React from 'react';

import Header from './Header';
import Details from './Details';
import History from './History';

import {Container, Body} from './styles';

function CaseDetail({navigation}) {
  const item = navigation.state.params.item;

  return (
    <Container>
      <Header>{navigation}</Header>
      <Body>
        <Details>{item}</Details>
        <History>{item.historicals}</History>
      </Body>
    </Container>
  );
}

export default CaseDetail;
