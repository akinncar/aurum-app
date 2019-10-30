import styled from 'styled-components/native';
import colors from '../../styles/colors';

import Title from '~/components/Title';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${colors.white};
`;

export const Header = styled.View`
  flex-direction: row;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  /* background: red; */
  margin-bottom: 20px;
`;

export const TitleHome = styled(Title)``;
