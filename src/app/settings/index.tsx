import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  Appearance,
  useColorScheme,
} from "react-native";
import { useRouter } from "expo-router";
import { ComponentProps } from "react";
import global, { useTheme } from "@/style/global";
import SettingsElement from "@/components/settings/SettingsElement";

export default function Settings() {
  const router = useRouter();
  const t = useTheme();
  const scheme = useColorScheme();

  const SettingsArray: ComponentProps<typeof SettingsElement>[] = [
    {
      onPress: () => router.navigate("/settings/appearance"),
      icon: "palette",
      title: "Theme",
      description: "Choose the app theme.",
    },
    { icon: "cat", title: "test", description: "test" },
  ];

  return (
    <ScrollView style={[{ backgroundColor: t.bg }]}>
      {SettingsArray.map((item) => (
        <SettingsElement key={item.title} {...item} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
