import { Text, View, StyleSheet, ScrollView, Pressable } from "react-native";
import { ComponentProps } from "react";

import global, { useColorMode } from "@/styles/global";
import SettingsElement from "@/components/SettingsElement";

export default function Settings() {
  const c = useColorMode();

  const SettingsArray: ComponentProps<typeof SettingsElement>[] = [
    {
      icon: "moon-waning-crescent",
      title: "Dark Mode",
      description: "Toggle dark/light mode",
    },
    { icon: "cat", title: "test", description: "test" },
  ];

  return (
    <ScrollView style={[{ backgroundColor: c.bg }]}>
      {SettingsArray.map((item) => (
        <SettingsElement key={item.title} {...item} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
