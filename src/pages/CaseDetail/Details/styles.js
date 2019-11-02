import styled from 'styled-components/native';
import colors from '~/styles/colors';

export const Container = styled.View`
  width: 100%;
  padding: 14px 24px;
  background: ${colors.white};
  justify-content: center;
  align-items: flex-start;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.light};
`;

export const TitleCase = styled.Text`
  font-size: 16px;
  font-weight: 600;
  text-transform: capitalize;
  color: ${colors.text};
  padding-bottom: 6px;
`;

export const InfoContainer = styled.View`
  justify-content: flex-start;
  margin: 8px 0;
`;

export const Label = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.lightGray};
`;

export const Span = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: ${colors.text};
  text-transform: capitalize;
`;
