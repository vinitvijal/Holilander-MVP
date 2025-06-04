import { SafeAreaView, StyleSheet, Text, View } from 'react-native';


import '../global.css';

export default function HomeScreen() {
  return (
      <SafeAreaView>
        <View>
          <Text className=' text-white'>Hello</Text>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
