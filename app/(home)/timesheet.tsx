import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Modal, Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import "../global.css";


export default function HomeScreen() {
   const [modalVisible, setModalVisible] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  
  return (
    <View className=" bg-zinc-100 h-screen-safe-or-0">
      <View className=" pt-16 h-32 px-2 bg-first w-full flex flex-row items-center justify-start">
        <Ionicons
          name="stopwatch-outline"
          size={24}
          color="white"
          style={{ padding: 10 }}
        />
        <Text className=" text-xl text-white font-semibold">Timesheet</Text>
      </View>
      <ScrollView className="flex-1" overScrollMode="never">

       
        <View className="flex flex-row items-center justify-between px-4 py-4 bg-white shadow-sm">
          <Text className="text-lg font-semibold text-gray-800">Your Timesheets</Text>
          <TouchableOpacity
            className="flex flex-row items-center"
            onPress={() => setModalVisible(true)}
          >
            <Ionicons name="options-outline" size={22} color="#2563eb" />
            <Text className="ml-2 text-blue-600 font-medium">Options</Text>
          </TouchableOpacity>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View className="flex-1 justify-center items-center bg-black/40">
            <View className="bg-white rounded-2xl p-6 w-11/12 shadow-lg">
              <Text className="text-xl font-bold mb-4 text-center text-gray-800">
          Download Timesheet
              </Text>
              <Text className="mb-4 text-gray-600 text-center">
          Select a date range to download your timesheet.
              </Text>
              <View className="flex flex-row justify-between mb-6">
          <TouchableOpacity
            className="flex-1 bg-gray-100 mx-1 px-4 py-3 rounded-lg border border-gray-200"
            onPress={async () => {
              const { DateTimePickerAndroid } = await import('@react-native-community/datetimepicker');
              DateTimePickerAndroid.open({
                value: startDate,
                mode: 'date',
                onChange: (_, date) => {
            if (date) setStartDate(date);
                },
              });
            }}
          >
            <Text className="text-gray-700 text-center font-medium">
              {`Start: ${startDate.toLocaleDateString()}`}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-1 bg-gray-100 mx-1 px-4 py-3 rounded-lg border border-gray-200"
            onPress={async () => {
              const { DateTimePickerAndroid } = await import('@react-native-community/datetimepicker');
              DateTimePickerAndroid.open({
                value: endDate,
                mode: 'date',
                onChange: (_, date) => {
            if (date) setEndDate(date);
                },
              });
            }}
          >
            <Text className="text-gray-700 text-center font-medium">
              {`End: ${endDate.toLocaleDateString()}`}
            </Text>
          </TouchableOpacity>
              </View>
              <TouchableOpacity className="bg-blue-600 p-3 rounded-full mb-2 shadow"
          onPress={() => {
            // Add download logic here
            setModalVisible(false);
          }}
              >
          <Text className="text-white text-center font-semibold text-base">
            Download
          </Text>
              </TouchableOpacity>
              <Pressable onPress={() => setModalVisible(false)}>
          <Text className="text-center text-blue-500 mt-2 font-medium">
            Cancel
          </Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <View className="flex items-center justify-center mt-6">
          <View className="bg-white shadow-sm rounded-lg p-6 w-11/12">
            <Text className="text-gray-800 mb-4 text-center font-semibold text-xl">
              Wexford Uni Hospital
            </Text>
            <Text className="text-gray-600 mb-2">From: 01 Jan 2023</Text>
            <Text className="text-gray-600 mb-4">To: 31 Jan 2023</Text>
            <TouchableOpacity className="bg-blue-500 p-3 rounded-full">
              <Text className="text-white text-center">Download Timesheet</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex items-center justify-center mt-6">
          <View className="bg-white shadow-sm rounded-lg p-6 w-11/12">
            <Text className="text-gray-800 mb-4 text-center font-semibold text-xl">
              St Columbs Hospital
            </Text>
            <Text className="text-gray-600 mb-2">From: 01 Feb 2023</Text>
            <Text className="text-gray-600 mb-4">To: 31 Feb 2023</Text>
            <TouchableOpacity className="bg-blue-500 p-3 rounded-full">
              <Text className="text-white text-center">Download Timesheet</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex items-center justify-center mt-6">
          <View className="bg-white shadow-sm rounded-lg p-6 w-11/12">
            <Text className="text-gray-800 mb-4 text-center font-semibold text-xl">
              Tallaght Hospital
            </Text>
            <Text className="text-gray-600 mb-2">From: 01 Jan 2023</Text>
            <Text className="text-gray-600 mb-4">To: 31 Jan 2023</Text>
            <TouchableOpacity className="bg-blue-500 p-3 rounded-full">
              <Text className="text-white text-center">Download Timesheet</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex items-center justify-center mt-6">
          <View className="bg-white shadow-sm rounded-lg p-6 w-11/12">
            <Text className="text-gray-800 mb-4 text-center font-semibold text-xl">
              St Columbs Hospital
            </Text>
            <Text className="text-gray-600 mb-2">From: 01 Jan 2023</Text>
            <Text className="text-gray-600 mb-4">To: 31 Jan 2023</Text>
            <TouchableOpacity className="bg-blue-500 p-3 rounded-full">
              <Text className="text-white text-center">Download Timesheet</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
