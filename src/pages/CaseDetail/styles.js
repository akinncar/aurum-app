import styled from 'styled-components/native';
import colors from '~/styles/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.SafeAreaView`
  height: 100px;
  padding: 12px;
  background: ${colors.white};
  justify-content: center;
  align-items: center;
  border-top-width: 0.5px;
  border-top-color: ${colors.lightGray};
`;

export const Header = styled.View`
  flex-direction: row;
  height: 70px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.light};
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;
  text-transform: capitalize;
  color: ${colors.text};
  padding-bottom: 6px;
`;

export const MaterialIcon = styled(Icon)`
  margin: 0 12px;
`;
