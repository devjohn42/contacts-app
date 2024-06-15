import { theme } from '@/global/theme';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
  padding: 0px 16px;
`;

export const ContainerTitle = styled.View`
  background-color: ${theme.colors.secondary};
  width: 30px;
  height: 30px;
  border-radius: 6px;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${theme.colors.shape};
  font-family: ${theme.fontFamily.bold};
  font-size: ${RFValue(16)}px;
`;

export const Separator = styled.View`
  width: 260px;
  height: 1px;
  background-color: ${theme.colors.secondary};
`;
