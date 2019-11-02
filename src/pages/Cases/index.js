import React, {useState, useEffect} from 'react';
import {TouchableOpacity, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {withNavigationFocus} from 'react-navigation';
import CaseItem from './CaseItem';
import InputSearch from '~/components/InputSearch';

import {casesRequestAll} from '~/store/modules/cases/actions';

import {Container, Header, MaterialIcon, TitleHome, CasesList} from './styles';
import colors from '~/styles/colors';

function Cases({isFocused, navigation}) {
  const dispatch = useDispatch();
  const cases = useSelector(state => state.cases.cases);
  const [filterActive, setFilterActive] = useState(false);
  const [filter, setFilter] = useState('');

  async function loadCases() {
    await dispatch(casesRequestAll());
  }

  useEffect(() => {
    loadCases();
  }, [isFocused]);

  return cases ? (
    <Container resizeMode="contain">
      <Header>
        {filterActive ? (
          <InputSearch
            autoCorrect={false}
            onChangeText={text => setFilter(text)}
            value={filter}
          />
        ) : (
          <TitleHome>Processos</TitleHome>
        )}
        <TouchableOpacity onPress={() => setFilterActive(!filterActive)}>
          <MaterialIcon name="search" size={24} color={`${colors.primary}`} />
        </TouchableOpacity>
      </Header>
      <CasesList
        data={cases.cases}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) =>
          filter === '' ? (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('CaseDetail', {item});
              }}>
              <CaseItem>{item}</CaseItem>
            </TouchableOpacity>
          ) : (
            item.title.toLowerCase().includes(filter.toLowerCase()) && (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('CaseDetail');
                }}>
                <CaseItem>{item}</CaseItem>
              </TouchableOpacity>
            )
          )
        }
      />
    </Container>
  ) : (
    <Container>
      <ActivityIndicator />
    </Container>
  );
}

export default withNavigationFocus(Cases);
