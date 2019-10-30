import styled from 'styled-components/native';
import colors from '../../styles/colors';

import Title from '~/components/Title';
import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${colors.white};
`;

export const TitleLogin = styled(Title)`
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const TextInput = styled(Input)`
  margin: 6px 0;
`;

export const SubmitButton = styled(Button)`
  margin: 12px 12px 12px 12px;
`;
