import { Text, View } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import Loading from '@/global/Loading';
import { theme } from '@/global/theme';

export default function App() {
  const [fontLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontLoaded) {
    return <Loading />;
  }
  return (
    <View>
      <Text style={{ fontFamily: theme.fontFamily.bold }}>Contacts</Text>
    </View>
  );
}
