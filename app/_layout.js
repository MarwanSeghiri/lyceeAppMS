import React from 'react';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Accueil' }} />
        <Stack.Screen name="creteil" options={{ title: 'Académie de Créteil' }} />
        <Stack.Screen name="prives" options={{ title: 'Lycées Privés' }} />
        <Stack.Screen name="types" options={{ title: 'Stats par Type' }} />
        <Stack.Screen name="versailles" options={{ title: 'Emails Versailles' }} />
        <Stack.Screen name="stats_academies" options={{ title: 'Stats par Académie' }} />
      </Stack>
    </SafeAreaProvider>
  );
}
