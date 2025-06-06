import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import '../global.css';


export default function HomeScreen() {
  return (
        <View className=''>
          <Hero/>
        </View>
  );
}


function Hero() {
  return (
    <View
      id="Hero"
      className=" pt-12 bg-[#344CB7] h-60"
      style={{ borderBottomEndRadius: "10%", borderBottomStartRadius: "10%" }}
    >
      <View className=" pt-6 relative flex justify-between items-center flex-row px-4">
        <View className="flex flex-row items-center gap-2">
        <Ionicons name="logo-ionic" size={24} color="white" />
        <Text className=" text-white" style={{fontSize: 20}}>Hollilander</Text>
        </View>
        <View className=" bg-[#2bb23d]  flex-row relative items-center" style={{ padding: 6, borderRadius: 10}}>
          <Ionicons name="notifications" size={24} color="white" />
          <View className="absolute border rounded-full bg-red-600 flex justify-center items-center" style={{ width: 10, height: 10, top: 0, right: 0 }}>
            {/* <Text className="text-white  ">5</Text> */}
          </View>
        </View>
      </View>

      <View className="pt-8">
        <Text className="text-white font-bold text-3xl px-4 mt-2">
          Welcome, Daniel
        </Text>
      </View>
    </View>
  );
}


