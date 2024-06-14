import React, { useState } from 'react';
import { Container, Header, HeaderTitle } from './styles';
import Researcher from './components/Researcher';
import TextInputContainer from './components/TextInputField';
import { theme } from '@/global/theme';
import { Feather } from '@expo/vector-icons';
import Contact from './components/Contact';

export default function Home() {
  const [name, setName] = useState('');
  return (
    <Container>
      <Header>
        <HeaderTitle>Contacts</HeaderTitle>
      </Header>
      <Researcher>
        <Feather name="phone" size={20} color={theme.colors.secondary} />
        <TextInputContainer
          placeholder="Pesquisar pelo nome..."
          placeholderTextColor={theme.colors.secondary_light}
          onChangeText={setName}
          value={name}
        />
        <Feather name="x" size={16} color={theme.colors.secondary} onPress={() => setName('')} />
      </Researcher>

      <Contact contact={{ name: 'Alice Telles Ribeiro', image: null }} />
    </Container>
  );
}
