//Skeleton for settings options.
import { ComponentProps } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import global, { useColorMode } from "@/styles/global";
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
  return (
    <Pressable onPress={() => onPress} style={[styles.SettingsWrap]}>
      <MaterialCommunityIcons style={[global.iconHuge]} name={icon} />
      <View>
        <Text>{title}</Text>
        <Text>{description}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  SettingsWrap: {
    padding: "2%",
    minHeight: "5%",
    flexDirection: "row",
  },
});
