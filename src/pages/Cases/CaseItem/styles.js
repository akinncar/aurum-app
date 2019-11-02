import styled from 'styled-components/native';
import colors from '~/styles/colors';

export const Container = styled.View`
  height: 100px;
  padding: 12px;
  background: ${colors.white};
  justify-content: center;
  align-items: flex-start;
  border-top-width: 0.5px;
  border-top-color: ${colors.lightGray};
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;
  text-transform: capitalize;
  color: ${colors.text};
  padding-bottom: 6px;
`;

export const NumberContainer = styled.View`
  justify-content: flex-start;
`;

export const NumberLabel = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: ${colors.lightGray};
`;

export const Number = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: ${colors.text};
`;
