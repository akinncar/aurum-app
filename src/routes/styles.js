import styled from 'styled-components/native';

import {colors} from '../styles';

export const BottomItem = styled.View`
  flex-direction: row;
  align-items: center;
  /* background: red; */
`;

export const Text = styled.Text`
  padding-right: 14px;
  letter-spacing: 1.5;
  color: ${props => (props.tintColor ? props.tintColor : colors.white)};
`;
