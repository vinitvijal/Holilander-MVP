import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import '../global.css';


export default function HomeScreen() {
  return (
        <View className=''>
          <Hero/>
          <MainCard/>
        </View>
  );
}


function Hero() {
  return (
    <View
      id="Hero"
      className=" pt-12 bg-first h-60"
    >
      <View className=" pt-6 relative flex justify-between items-center flex-row px-4">
        <View className="flex flex-row items-center gap-2">
        <Ionicons name="logo-ionic" size={24} className='p-2  rounded-lg bg-[#ffffff]' color="#007aff" />
        <Text className=" text-zinc-100 text-xl font-semibold">Hollilander</Text>
        </View>
        <View className=" bg-[#4c8ed5]  flex-row relative items-center" style={{ padding: 6, borderRadius: 10}}>
          <Ionicons name="notifications" size={24} color="white" />
          <View className="absolute border rounded-full bg-red-600 flex justify-center items-center" style={{ width: 10, height: 10, top: 0, right: 0 }}>
            {/* <Text className="text-white  ">5</Text> */}
          </View>
        </View>
      </View>

      <View className="pt-5">
        <Text className="text-white font-bold text-3xl px-4 mt-2">
          Welcome, Daniel
        </Text>
      </View>
    </View>
  );
}




function MainCard() {
  return (
    <View className="bg-white -top-16 rounded-2xl flex gap-4 items-center h-40 shadow-sm py-6 px-5 m-4">
      <View className=' w-[100%] p-2 rounded-full bg-[#007aff] flex items-center justify-center'>
        <Text className="text-lg font-semibold text-white">Upcoming Schedule</Text>
      </View>
      <View className='  py-1 px-4 rounded-full bg-green-100 flex items-center justify-center'>
        <Text className=" font-bold text-green-600">DAY SHIFT</Text>
      </View>
    </View>
  );
}