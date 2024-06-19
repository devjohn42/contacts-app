import React, { useEffect, useId, useState, useRef } from 'react';
import {
  Container,
  Header,
  HeaderTitle,
  PerfilButton,
  PerfilButtonTitle,
  PerfilContainer,
  PerfilName,
  PerfilPhoneNumber,
  PhoneNumber,
} from './styles';
import Researcher from './components/Researcher';
import TextInputContainer from './components/TextInputField';
import { theme } from '@/global/theme';
import { Feather } from '@expo/vector-icons';
import * as Contacts from 'expo-contacts';
import BottomSheet from '@gorhom/bottom-sheet';
import Contact, { ContactDataProps } from './components/Contact';
import { Alert, SectionList } from 'react-native';
import SectionHeader from './components/SectionHeader';
import Avatar from './components/Contact/components/Avatar';
import { RFValue } from 'react-native-responsive-fontsize';

type SectionListProps = {
  title: string;
  data: ContactDataProps[];
};

export default function Home() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState<Contacts.Contact>();
  const [contacts, setContacts] = useState<SectionListProps[]>([]);

  const bottomSheet = useRef<BottomSheet>(null);
  const handleBottomSheetOpen = () => bottomSheet.current?.expand();
  const handleBottomSheetClose = () => bottomSheet.current?.snapToIndex(0);

  const handleOpenDetails = async (id: string) => {
    const response = await Contacts.getContactByIdAsync(id);
    setContact(response);
    console.log(response);

    handleBottomSheetOpen();
  };

  const normalizeString = (str: string) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  const fetchContacts = async () => {
    try {
      const { status } = await Contacts.requestPermissionsAsync();

      if (status === Contacts.PermissionStatus.GRANTED) {
        const { data } = await Contacts.getContactsAsync({
          name,
          sort: 'firstName',
        });

        const list = data
          .map((contact) => ({
            id: contact.id ?? useId(),
            name: contact.name,
            image: contact.image,
          }))
          .reduce<SectionListProps[]>((acc: any, item) => {
            const firstLetter = normalizeString(item.name[0].toUpperCase());

            const existingEntry = acc.find((entry: SectionListProps) => entry.title === firstLetter);

            if (existingEntry) {
              existingEntry.data.push(item);
            } else {
              acc.push({ title: firstLetter, data: [item] });
            }

            return acc;
          }, [])
          .sort((a, b) => a.title.localeCompare(b.title, 'pt-BR'));

        setContacts(list);
        setContact(data[0]);
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Contatos', 'Não foi possível acessar os contatos');
    }
  };

  useEffect(() => {
    fetchContacts();
  }, [name]);

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

      <SectionList
        sections={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Contact contact={item} onPress={() => handleOpenDetails(item.id)} />}
        renderSectionHeader={({ section }) => <SectionHeader title={section.title} />}
        showsVerticalScrollIndicator={false}
      />

      {contact && (
        <BottomSheet
          ref={bottomSheet}
          snapPoints={[0.01, RFValue(320)]}
          backgroundStyle={{ backgroundColor: 'transparent' }}
          handleComponent={() => null}
        >
          <Avatar
            name={contact.name}
            variant="large"
            image={contact.image}
            containerStyle={{ marginBottom: -50, zIndex: 1, alignSelf: 'center' }}
          />
          <PerfilContainer>
            <PerfilName>{contact.name}</PerfilName>
            {contact.phoneNumbers && (
              <PerfilPhoneNumber>
                <Feather name="phone" size={18} color={theme.colors.secondary} />
                <PhoneNumber>{contact.phoneNumbers[0].number}</PhoneNumber>
              </PerfilPhoneNumber>
            )}
            <PerfilButton onPress={handleBottomSheetClose} activeOpacity={0.8}>
              <PerfilButtonTitle>Fechar</PerfilButtonTitle>
            </PerfilButton>
          </PerfilContainer>
        </BottomSheet>
      )}
    </Container>
  );
}
