import '../global.css';

import { Stack } from 'expo-router';

// This is the main layout of the app
// It wraps your pages with the providers they need
export default function RootLayout() {

  return (
   <>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f472b6",
          }
        }}
      />


   </>
  );
}
