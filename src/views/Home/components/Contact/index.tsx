import React from 'react';
import { Container, Name } from './styles';
import { ImageProps, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { theme } from '@/global/theme';

type Props = {
  name: string;
  image?: ImageProps | null;
};

interface ContactProps {
  contact: Props;
}

export default function Contact({ contact, ...rest }: ContactProps) {
  return (
    <Container>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Name>{contact.name}</Name>
      </View>
      <MaterialIcons name="keyboard-arrow-right" size={20} color={theme.colors.secondary} />
    </Container>
  );
}
