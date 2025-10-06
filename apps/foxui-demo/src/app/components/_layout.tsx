import React from 'react';

import { Stack } from 'expo-router';

export default function ComponentsLayout() {



  return (
    <Stack screenOptions={{ headerShown: false, headerBackButtonDisplayMode: "generic" }} />
  );
}