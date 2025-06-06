import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import "../global.css";

export default function HomeScreen() {
  return (
    <View className="">
      <Hero />
      <MainCard />
    </View>
  );
}

function Hero() {
  return (
    <View id="Hero" className=" pt-12 bg-first h-60">
      <View className=" pt-6 relative flex justify-between items-center flex-row px-4">
        <View className="flex flex-row items-center gap-2">
          <Ionicons
            name="logo-ionic"
            size={24}
            className="p-2  rounded-lg bg-[#ffffff]"
            color="#007aff"
          />
          <Text className=" text-zinc-100 text-xl font-semibold">
            Hollilander
          </Text>
        </View>
        <View
          className=" bg-fifth  flex-row relative items-center"
          style={{ padding: 6, borderRadius: 10 }}
        >
          <Ionicons name="notifications" size={24} color="white" />
          <View
            className="absolute border rounded-full bg-red-600 flex justify-center items-center"
            style={{ width: 10, height: 10, top: 0, right: 0 }}
          >
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
    const [currentTime, setCurrentTime] = useState(new Date());


    useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);


  return (
    <View className="bg-white -top-16 rounded-2xl flex gap-4 items-center  shadow-sm py-6 px-5 m-4">
      <View className=" w-[100%] p-2 rounded-full bg-first flex items-center justify-center">
        <Text className="text-lg font-semibold text-white">
          Upcoming Schedule
        </Text>
      </View>
      <View className="  py-1 px-4 rounded-full bg-green-100 flex items-center justify-center">
        <Text className=" font-bold text-green-600">DAY SHIFT</Text>
      </View>
        <View className=" w-full flex items-center justify-between flex-row">
          <Text className="text-   font-light">Monday, 8th June</Text>
          <Text className="font-semibold">Tallaght hospital</Text>
        </View>

      <View className=" w-full flex items-center justify-between pt-4 flex-row">
        <Text className="  font-semibold text-2xl">{currentTime.toLocaleTimeString().toString().replaceAll(':', ' : ').replace('PM', ' PM').replace('AM', ' AM')}</Text>
        <TouchableHighlight className=" bg-second px-4 py-2 rounded-full">
          <Text className="text-white font-semibold">Check In</Text>
        </TouchableHighlight>
        </View>

        <View className="border w-full border-zinc-200" />
        
        
        <View className="flex flex-row justify-between w-full px-4">
          <View className="flex items-center">
            <Ionicons name="stopwatch-outline" size={24} color="#007aff" />
            <Text className="text-zinc-500 font-bold mt-4">10:00 AM</Text>
            <Text className="text-zinc-500 text-sm">Start Time</Text>
          </View> 

          <View className="flex items-center">
            <Ionicons name="stopwatch-outline" size={24} color="#007aff" />
            <Text className="text-zinc-500 font-bold mt-4">8:00 PM</Text>
            <Text className="text-zinc-500 text-sm">End Time</Text>
          </View> 

          <View className="flex items-center">
            <Ionicons name="stopwatch-outline" size={24} color="#007aff" />
            <Text className="text-zinc-500 font-bold mt-4">10:00:00</Text>
            <Text className="text-zinc-500 text-sm">Working HR</Text>
          </View>     
        </View>
    </View>
  );
}
