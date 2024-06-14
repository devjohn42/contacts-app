import { theme } from '@/global/theme';
import { TextInput, TextInputProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components';

export const TextInputField = styled(TextInput)<TextInputProps>`
  padding-left: 10px;
  flex: 1;
  color: ${theme.colors.secondary};
  font-family: ${theme.fontFamily.regular};
  font-size: ${RFValue(16)}px;
`;
