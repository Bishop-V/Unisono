import { Text, View, StyleSheet, Pressable } from "react-native";
import global, { useTheme } from "@/style/global";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ProgressBar() {
  const t = useTheme();
  return <View style={[{ backgroundColor: t.card }, styles.main]}></View>;
}

const styles = StyleSheet.create({
  main: {
    height: "5%",
    width: "auto",
    borderRadius: 99,
  },
});
