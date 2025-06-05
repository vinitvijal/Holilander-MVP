import React from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
<View className=' h-screen-safe-or-0 bg-[#0F67B1]'>
    <Tabs
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarShowLabel: true,
      tabBarIcon: ({ color, size }) => {
        const icons: Record<string, React.ComponentProps<typeof Ionicons>['name']> = {
          index: 'home-outline',
          book: 'list-outline',
          timesheet: 'checkmark-circle-outline',
          find: 'search-outline',
          profile: 'person-outline',
        };
        return <Ionicons name={icons[route.name] as React.ComponentProps<typeof Ionicons>['name']} size={size} color={color} className=' ' />;
      },
      tabBarActiveTintColor: '#007aff',
      tabBarInactiveTintColor: '#888',
      tabBarStyle: {
        height: 70,
        paddingBottom: 10,
        paddingTop: 10,
        borderRadius: 20,
      },
    })}
    >
      <Tabs.Screen name="find" options={{ title: 'Find' }} />
      <Tabs.Screen name="book" options={{ title: 'Book' }} />
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="timesheet" options={{ title: 'Timesheet' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
    </Tabs>
          <StatusBar style="auto" />
  </View>
  );
}
