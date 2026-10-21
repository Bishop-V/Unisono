import { Text, View, StyleSheet, ScrollView, Pressable } from "react-native";
import global, { useTheme } from "@/style/global";
export default function home() {
  const t = useTheme();
  return <ScrollView style={[{ backgroundColor: t.bg }]}></ScrollView>;
}

const styles = StyleSheet.create({});
