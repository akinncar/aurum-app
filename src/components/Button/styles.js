import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import colors from '../../styles/colors';

export const Container = styled(RectButton)`
  height: 51px;
  width: 80%;
  background: transparent;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  margin: 18px auto 12px auto;
`;

export const BackgroundButton = styled.View`
  height: 51px;
  width: 80%;
  background: ${colors.primary};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin: 18px auto 12px auto;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
`;
