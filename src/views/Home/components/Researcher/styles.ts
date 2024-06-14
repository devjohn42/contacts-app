import { theme } from '@/global/theme';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: -30px;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 0px;
`;

export const Input = styled.View`
  flex: 1;
  background-color: ${theme.colors.shape};
  border-radius: 16px;
  height: 50px;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  gap: 5px;
  elevation: 10;
`;
