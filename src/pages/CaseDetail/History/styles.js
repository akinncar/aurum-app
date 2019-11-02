import styled from 'styled-components/native';
import colors from '~/styles/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  width: 100%;
  padding: 14px 24px;
  margin-bottom: 24px;
  background: ${colors.white};
  justify-content: center;
  align-items: flex-start;
`;

export const TitleHistory = styled.Text`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1;
  text-transform: uppercase;
  color: ${colors.darkTransparent};
  padding-bottom: 6px;
`;

export const Historicals = styled.FlatList``;

export const InfoContainer = styled.View`
  justify-content: flex-start;
  margin: 8px 0;
`;

export const Label = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.text};
`;

export const Span = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: ${colors.lightGray};
  text-transform: capitalize;
`;

export const Description = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.textTertiary};
  margin: 6px 0;
`;
