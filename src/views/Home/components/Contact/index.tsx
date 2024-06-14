import React from 'react';
import { Container, Name } from './styles';
import Avatar from './components/Avatar';
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
        <Avatar name="Alice Telles Ribeiro" image={contact.image} />
        <Name>{contact.name}</Name>
      </View>
      <MaterialIcons name="keyboard-arrow-right" size={20} color={theme.colors.secondary} />
    </Container>
  );
}
