import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  padding: 0 10px;
  height: 40px;
  width: 80%;
  background: ${colors.white};
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  border: 1px solid ${colors.lightGray};
  border-radius: 8px;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: colors.textSecundary,
})`
  flex: 1;
  font-size: 16px;
  color: ${colors.text};
`;
