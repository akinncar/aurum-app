import styled from 'styled-components/native';
import colors from '~/styles/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex-direction: row;
  height: 70px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.light};
`;

export const TitleHeader = styled.Text`
  font-size: 20px;
  font-weight: 600;
  text-transform: capitalize;
  color: ${colors.text};
  padding-bottom: 6px;
`;

export const MaterialIcon = styled(Icon)`
  margin: 0 12px;
`;

export const Body = styled.ScrollView`
  height: 100%;
  width: 100%;
`;
