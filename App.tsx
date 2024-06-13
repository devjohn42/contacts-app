import { StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import Loading from '@/global/Loading';

import Home from '@/views/Home';
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
    <>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.secondary} />
      <Home />
    </>
  );
}
