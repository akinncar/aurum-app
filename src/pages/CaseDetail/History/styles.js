import styled from 'styled-components/native';
import colors from '~/styles/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  width: 100%;
  padding: 6px 24px 14px 24px;
  margin-bottom: 24px;
  background: ${colors.white};
  justify-content: center;
  align-items: flex-start;
`;

export const Head = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: baseline;
  flex-direction: row;
`;

export const TitleHistory = styled.Text`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1;
  text-transform: uppercase;
  color: ${colors.darkTransparent};
`;

export const SelectFilter = styled.TouchableOpacity`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const MaterialIcon = styled(Icon)`
  margin: 14px;
  justify-content: flex-end;
`;

export const Historicals = styled.FlatList``;

export const InfoContainer = styled.View`
  justify-content: flex-start;
  flex-direction: row;
`;

export const BoxDayDate = styled.View`
  align-items: center;
  justify-content: center;
  margin: 8px 8px 0 0;
  background: ${colors.primary};
  border-radius: 8px;
  height: 35px;
`;

export const DayDate = styled.Text`
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  padding: 8px;
  color: ${colors.white};
`;

export const HistoricalsItem = styled.View`
  justify-content: flex-start;
  margin: 8px 8px;
  flex: 1;
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
  max-width: 90%;
`;

export const ModalFilter = styled.Modal``;

export const ModalBackground = styled.View`
  height: 65%;
  align-items: center;
  justify-content: flex-end;
`;

export const ModalContainer = styled.View`
  height: 35%;
  align-items: flex-start;
  justify-content: space-evenly;
  background: ${colors.white};
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  box-shadow: 0 10px 12px ${colors.dark};
  padding: 18px 0;
`;

export const FilterList = styled.View`
  align-items: flex-start;
  justify-content: space-evenly;
  height: 50%;
  width: 100%;
  padding: 0 24px;
`;

export const FilterItem = styled.TouchableOpacity`
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
`;

export const FilterChecked = styled.View`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
`;

export const FilterLabel = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: ${colors.darkTransparent};
  margin: auto 0;
`;

export const Divisor = styled.View`
  height: 1px;
  width: 100%;
  background: ${colors.lightGray};
`;
