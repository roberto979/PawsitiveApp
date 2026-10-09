import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="journey" />
      <Stack.Screen name="programs" />
      <Stack.Screen name="contact" />
    </Stack>
  );
}
