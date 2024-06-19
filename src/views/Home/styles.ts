import { theme } from '@/global/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { opacity } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
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

export const PerfilContainer = styled.View`
  flex: 1;
  background-color: ${theme.colors.details};
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  align-items: center;
  padding: 32px;
`;

export const PerfilName = styled.Text`
  margin-top: 30px;
  font-size: ${RFValue(28)}px;
  font-family: ${theme.fontFamily.bold};
`;

export const PerfilPhoneNumber = styled.View`
  margin-top: ${RFValue(20)}px;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const PhoneNumber = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${theme.fontFamily.regular};
`;

export const PerfilButton = styled(TouchableOpacity)`
  background-color: ${theme.colors.secondary};
  padding: 10px 100px;
  margin-top: ${RFValue(40)}px;
  border-radius: 6px;
`;

export const PerfilButtonTitle = styled.Text`
  color: ${theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${theme.fontFamily.bold};
`;
