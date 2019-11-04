import styled from 'styled-components/native';
import colors from '~/styles/colors';

export const Container = styled.View`
  height: 100px;
  padding: 14px 18px;
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

export const InfoContainer = styled.View`
  justify-content: flex-start;
`;

export const Label = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: ${colors.lightGray};
`;

export const Span = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: ${colors.text};
`;
