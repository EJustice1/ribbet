import React from 'react';
import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#A5E490', 
        },
        headerStyle: {
          backgroundColor: '#A5E490', 
        },
        tabBarActiveTintColor: 'dodgerblue', 
        tabBarInactiveTintColor: 'white', 
        headerTintColor: 'white',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "BetFeed",
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome name="home" size={focused ? 32 : 28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="BetMaker"
        options={{
          title: "Bet Maker",
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome name="plus" size={focused ? 32 : 28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome name="user" size={focused ? 32 : 28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}