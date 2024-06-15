import { ActivityIndicator, StyleSheet } from 'react-native';
import { theme } from '../theme';

export default function Loading() {
  return <ActivityIndicator style={styles.loading} color={theme.colors.secondary} size={20} />;
}

export const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
