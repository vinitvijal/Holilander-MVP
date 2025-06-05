import { Text, View } from 'react-native';
import '../global.css';


export default function HomeScreen() {
  return (
        <View className=' pt-12 bg-pink-300 h-screen-safe-or-0'>
          <View>
            <Text className='text-3xl font-bold'>Welcome Back</Text>
          </View>
        </View>
  );
}
