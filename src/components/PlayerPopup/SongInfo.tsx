import { Text, View, StyleSheet } from "react-native";
import global, { useTheme } from "@/style/global";

export default function SongInfo() {
  const t = useTheme();
  return (
    <View style={[]}>
      <Text style={[{ color: t.text }]}>Brakhage</Text>
      <Text style={[{ color: t.text }]}>Dots and Loops - Stereolab</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
