import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import "../global.css";

export default function HomeScreen() {
  return (
    <SafeAreaView className=" h-screen-safe-or-0 bg-zinc-100">
      <View className=" absolute top-0 w-full bg-transparent blur-md h-20 "/>

    <ScrollView overScrollMode="never" >
      <Hero />
      <MainCard />
      <AttendanceLog />
    </ScrollView>
    </SafeAreaView>
  );
}

function Hero() {
  return (
    <View id="Hero" className=" z-0  top-0 bg-first h-52">
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
    <View className="bg-white -top-16 rounded-2xl flex gap-4 items-center  py-6 px-5 mx-4 mt-4">
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
          <Text className="font-semibold">Tallaght Hospital</Text>
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



function AttendanceLog(){
  const attendanceData = [
    {
      date: "02 June 2025",
      day: "Thursday",
      checkIn: "08:00",
      checkOut: "17:00",
      CheckInTime: true,
      CheckOutTime: true,
    },
    {
      date: "01 June 2025",
      day: "Wednesday",
      checkIn: "08:15",
      checkOut: "17:05",
      CheckInTime: true,
      CheckOutTime: true,
    },
    {
      date: "31 May 2025",
      day: "Tuesday",
      checkIn: "08:10",
      checkOut: "17:00",
      CheckInTime: true,
      CheckOutTime: false,
    },
    {
      date: "30 May 2025",
      day: "Monday",
      checkIn: "08:05",
      checkOut: "17:00",
      CheckInTime: false,
      CheckOutTime: true,
    },
    {
      date: "29 May 2025",
      day: "Sunday",
      checkIn: "08:20",
      checkOut: "17:10",
      CheckInTime: true,
      CheckOutTime: true,
    },
   
  ]
  return (
    <View className=" -top-6 px-6 ">
        <View className="flex flex-row justify-between items-center">
          <Text className="text-2xl font-bold">Attendance Log</Text>
          <TouchableOpacity>
            <Text className="text-md text-second">View All</Text>
          </TouchableOpacity>
        </View>

          {attendanceData.map((data, index) => <View key={index} className=" border-b py-4 px-2 border-zinc-300 my-4 flex flex-row justify-between" >
            <View className=" flex-1">
              <Text className=" font-semibold text-lg">{data.day}</Text>
              <Text className="text-zinc-500 ">{data.date}</Text>
            </View>

            <View className=" flex flex-row gap-4">
            <View className=" flex items-center">
              <Text className={" font-bold text-lg "  + (data.CheckInTime ? 'text-emerald-600' : 'text-red-600')}>{data.checkIn}</Text>
              <Text className="text-zinc-500">Check In</Text>
            </View>

            <View className=" flex items-center">
              <Text className={" font-bold text-lg " + (data.CheckOutTime ? 'text-emerald-600' : 'text-red-600')}>{data.checkOut}</Text>
              <Text className="text-zinc-500">Check Out</Text>
            </View>
            </View>

        </View> )}

       
    </View>
  )
}
