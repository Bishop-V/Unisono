import { Text, View, StyleSheet, ScrollView, Pressable } from "react-native";
import global, { useColorMode } from "@/styles/global";
export default function Search() {
  const c = useColorMode();
  return <ScrollView style={[{ backgroundColor: c.bg }]}></ScrollView>;
}

const styles = StyleSheet.create({});
