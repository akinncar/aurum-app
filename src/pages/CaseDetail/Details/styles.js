import styled from 'styled-components/native';
import colors from '~/styles/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
  width: 100%;
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

export const FileContainer = styled.View`
  flex-direction: row;
  max-width: 90%;
  /* background: red; */
  align-items: center;
`;

export const ShowFile = styled.TouchableOpacity`
  background: ${colors.primary};
  padding: 8px;
  margin: 8px 0 0 0;
  align-items: flex-start;
  border-radius: 8px;
`;

export const SpanFile = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: ${colors.white};
  flex: 1;
`;

export const DeleteFile = styled.TouchableOpacity``;

export const MaterialIcon = styled(Icon)`
  margin: 14px;
`;
