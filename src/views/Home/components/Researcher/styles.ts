import { theme } from '@/global/theme';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: -30px;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 0;
`;

export const Input = styled.View`
  flex: 1;
  background-color: ${theme.colors.shape};
  border-radius: 16px;
  height: 50px;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  gap: 7;
  elevation: 10;
`;
