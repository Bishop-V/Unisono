import { useEffect } from "react";
import { Stack } from "expo-router";
import { useTheme, loadTheme } from "@/style/global";

export default function RootLayout() {
  const t = useTheme();
  useEffect(() => {
    loadTheme();
  }, []);
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: t.bg },
        headerTintColor: t.text,
        headerShadowVisible: false,
        contentStyle: { backgroundColor: t.bg },
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="settings"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
