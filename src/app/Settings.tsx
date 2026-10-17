import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  Appearance,
  useColorScheme,
} from "react-native";
import { ComponentProps } from "react";
import global, { useTheme } from "@/style/global";
import SettingsElement from "@/components/SettingsElement";

export default function Settings() {
  const t = useTheme();
  const scheme = useColorScheme();

  const SettingsArray: ComponentProps<typeof SettingsElement>[] = [
    {
      onPress: () =>
        Appearance.setColorScheme(scheme === "dark" ? "light" : "dark"),
      icon: "moon-waning-crescent",
      title: "Dark Mode",
      description: "Toggle dark/light mode",
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
