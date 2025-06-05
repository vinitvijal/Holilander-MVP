import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text } from 'react-native';
import 'react-native-reanimated';
import './global.css';
export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <SafeAreaView>
        <Text className='text-white'>Hello</Text>
        <Link href="/explore" className=' text-pink-300'>Hreelo</Link>
      </SafeAreaView>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
