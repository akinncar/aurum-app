import styled from 'styled-components/native';
import colors from '~/styles/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Title from '~/components/Title';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${colors.white};
`;

export const Header = styled.View`
  flex-direction: row;
  height: 100px;
  width: 90%;
  justify-content: space-between;
  align-items: center;
`;

export const MaterialIcon = styled(Icon)`
  margin: 0 12px;
`;

export const CasesList = styled.FlatList`
  width: 100%;
`;
