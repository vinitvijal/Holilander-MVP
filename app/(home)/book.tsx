import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import '../global.css';


export default function HomeScreen() {
  return (
        <View className=' bg-zinc-100'>
          <View className=" pt-16 h-32 px-2 bg-first w-full flex flex-row items-center justify-start">
              <Ionicons name="search-outline" size={24} color="white" style={{ padding: 10 }} />
              <Text className=' text-xl text-white font-semibold'>Find Shifts</Text>
          </View>
        </View>
  );
}
