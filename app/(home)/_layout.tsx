import React from 'react';

import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

import { StatusBar } from 'expo-status-bar';

export default function TabLayout() {

  return (
    <>
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
        height: 100,
        paddingBottom: 10,
        paddingTop: 10,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.12,
        shadowRadius: 5,
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
          </>
  );
}
