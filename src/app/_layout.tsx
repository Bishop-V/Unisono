import { Stack } from "expo-router";
import { useTheme } from "@/style/global";
export default function RootLayout() {
  const t = useTheme();
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
        name="Settings"
        options={{
          title: "Settings",
        }}
      />
    </Stack>
  );
}
