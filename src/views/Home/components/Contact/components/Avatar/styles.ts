import { theme } from '@/global/theme';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const AvatarContainer = styled.View``;

export const AvatarDefault = styled.View`
  width: 55px;
  height: 55px;
  border-radius: 6px;
  background-color: ${theme.colors.shape};

  justify-content: center;
  align-items: center;
`;

export const AvatarLetter = styled.Text`
  color: ${theme.colors.secondary};
  font-family: ${theme.fontFamily.bold};
  font-size: ${RFValue(22)}px;
`;
