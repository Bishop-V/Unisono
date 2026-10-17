//Skeleton for settings options.
import { ComponentProps } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import global, { useTheme } from "@/style/global";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  onPress?: () => void;
  icon: ComponentProps<typeof MaterialCommunityIcons>["name"];
  title: string;
  description: string;
};

export default function SettingsElement({
  onPress,
  icon,
  title,
  description,
}: Props) {
  const t = useTheme();
  return (
    <Pressable onPress={onPress} style={[styles.SettingsWrap]}>
      <MaterialCommunityIcons
        style={[global.iconHuge, { color: t.text }]}
        name={icon}
      />
      <View>
        <Text style={[{ color: t.text }]}>{title}</Text>
        <Text style={[{ color: t.text }]}>{description}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  SettingsWrap: {
    padding: "2%",
    minHeight: "5%",
    flexDirection: "row",
    alignItems: "center",
  },
});
