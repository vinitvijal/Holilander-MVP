import React from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
        <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarIcon: ({ color, size }) => {
          const icons: Record<string, React.ComponentProps<typeof Ionicons>['name']> = {
            home: 'home-outline',
            task1: 'list-outline',
            task2: 'checkmark-circle-outline',
            task3: 'clipboard-outline',
            profile: 'person-outline',
          };
          return <Ionicons name={icons[route.name] as React.ComponentProps<typeof Ionicons>['name']} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007aff',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
        },
      })}
    >
      <Tabs.Screen name="home" options={{ title: 'Home' }} />
      <Tabs.Screen name="task1" options={{ title: 'Task 1' }} />
      <Tabs.Screen name="task2" options={{ title: 'Task 2' }} />
      <Tabs.Screen name="task3" options={{ title: 'Task 3' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
    </Tabs>
  );
}
