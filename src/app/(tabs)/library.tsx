import { Text, View, StyleSheet, ScrollView, Pressable } from "react-native";
import global, { useTheme } from "@/style/global";
import PlayButton from "@/components/PlayerPopup/PlayButton";
export default function Library() {
  const t = useTheme();
  return (
    <ScrollView style={[{ backgroundColor: t.bg }]}>
      <PlayButton />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
