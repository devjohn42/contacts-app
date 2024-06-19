import React from 'react';
import { Container, Name } from './styles';
import Avatar from './components/Avatar';
import { ImageProps, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { theme } from '@/global/theme';

export type ContactDataProps = {
  id: string;
  name: string;
  image?: ImageProps | null;
};

interface ContactProps {
  contact: ContactDataProps;
  onPress: () => void;
}

export default function Contact({ contact, onPress, ...rest }: ContactProps) {
  return (
    <Container onPress={onPress}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Avatar name={contact.name} image={contact.image} key={contact.id} />
        <Name>{contact.name}</Name>
      </View>
      <MaterialIcons name="keyboard-arrow-right" size={20} color={theme.colors.secondary} />
    </Container>
  );
}
