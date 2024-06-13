import { theme } from '@/global/theme';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.primary};
`;
export const Header = styled.View`
  background-color: ${theme.colors.secondary};
  padding: 35px 0px;

  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  color: ${theme.colors.shape};

  font-family: ${theme.fontFamily.bold};
  font-size: ${RFValue(22)}px;
`;
