import React, {useRef, useState, useEffect} from 'react';
import {Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {withNavigationFocus} from 'react-navigation';

import {casesRequestAll} from '~/store/modules/cases/actions';

import {Container, Header, TitleHome, CasesList} from './styles';
import colors from '../../styles/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

function Process({isFocused}) {
  const dispatch = useDispatch();
  const cases = useSelector(state => state.cases.cases);

  async function loadCases() {
    await dispatch(casesRequestAll());
  }

  useEffect(() => {
    loadCases();
  }, [isFocused]);

  return (
    <Container resizeMode="contain">
      <Header>
        <TitleHome>Processos</TitleHome>
        <Icon name="search" size={22} color={`${colors.primary}`} />
      </Header>
      <CasesList
        data={cases.cases}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <Text>{item.title}</Text>}
      />
    </Container>
  );
}

export default withNavigationFocus(Process);
