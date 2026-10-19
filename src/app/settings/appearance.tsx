import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  Appearance,
} from "react-native";
import { useRouter } from "expo-router";
import { ComponentProps } from "react";
import global, { useTheme, colors } from "@/style/global";
import SettingsElement from "@/components/SettingsElement";
import { ThemeOption } from "@/components/settings/ThemeOption";

export default function appearance() {
  const router = useRouter();
  const t = useTheme();

  return (
    <ScrollView style={[{ backgroundColor: t.bg }]}>
      {/* theme select */}
      <View>
        <Text style={[{ color: t.text }, global.header1]}> Color themes </Text>

        <View style={[styles.ThemeSelect]}>
          {Object.keys(colors).map((name) => (
            <ThemeOption key={name} name={name as keyof typeof colors} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  ThemeSelect: {
    flexDirection: "row",
  },
});
