import '../global.css';

import React, { useEffect } from 'react';

import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { LoadFonts } from '@/hooks';
import { ThemeProvider } from '@/ui';

export { ErrorBoundary } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <ThemeProvider>


      <SafeAreaProvider>
        <AppLayout />
      </SafeAreaProvider>

    </ThemeProvider>
  );
}

export function AppLayout() {

  const { fontsLoaded, fontError } = LoadFonts();

  useEffect(() => {
    if (fontError) throw fontError;
  }, [fontError]);


  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView>
      <AppProviders />
    </GestureHandlerRootView>
  );
}

function AppProviders() {

  const SCREEN_OPTIONS = { headerShown: true, headerBackButtonDisplayMode: "minimal" } as const;

  return (
    <View className="h-full flex-1">
      <Stack screenOptions={SCREEN_OPTIONS}>
        <Stack.Screen name="index" />
        <Stack.Screen name="demos" />
        <Stack.Screen name="components" />

      </Stack>

    </View>
  );
}
