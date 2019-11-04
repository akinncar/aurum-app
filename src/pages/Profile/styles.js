import styled from 'styled-components/native';
import colors from '~/styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${colors.white};
`;

export const User = styled.Text`
  font-size: 16px;
  font-weight: 600;
  width: 80%;
  margin: 18px 0;
  align-items: flex-start;
  color: ${colors.text};
`;
