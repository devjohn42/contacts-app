import { theme } from '@/global/theme';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #ceceef;
  padding: 0px 16px;
  margin-top: 20px;
`;

export const Name = styled.Text`
  color: ${theme.colors.secondary};
  font-family: ${theme.fontFamily.regular};
  font-size: ${RFValue(18)}px;

  margin-left: 15px;
`;
