import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { useColorScheme } from '@/components/useColorScheme';

// Ícones outline modernos
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
}) {
  return <Ionicons size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#6B7280',
        headerShown: useClientOnlyValue(false, true),
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          elevation: 0,
          height: 85,
        },
        tabBarBackground: () => (
          <LinearGradient
            colors={['transparent', 'rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.9)', '#000000']}
            locations={[0, 0.3, 0.7, 1]}
            style={StyleSheet.absoluteFill}
          />
        ),
      }}>

      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={"home-outline"}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="two"
        options={{
          title: 'Conversas',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={"chatbubbles-outline"}
              color={color}
            />
          ),
          headerShown: true,
          headerStyle: {
            backgroundColor: '#141414',
          },
          headerShadowVisible: false,
        }}
      />

      <Tabs.Screen
        name="analytics"
        options={{
          title: 'Minhas Análises',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={"podium-outline"}
              color={color}
            />
          ),
          headerShown: true,
          headerStyle: {
            backgroundColor: '#141414',
          },
          headerShadowVisible: false,
        }}
      />
    </Tabs>
  );
}