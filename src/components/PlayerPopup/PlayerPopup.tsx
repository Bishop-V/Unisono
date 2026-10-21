import { ComponentProps } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import global, { useTheme } from "@/style/global";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PlayButton from "./PlayButton";
import SongArt from "./SongArt";
import SongInfo from "./SongInfo";
import ProgressBar from "./ProgressBar";
export default function PlayerPopup() {
  const t = useTheme();
  return (
    <Pressable style={styles.main}>
      <View style={[styles.controls, { backgroundColor: t.bg }]}>
        <View style={styles.playerLeft}>
          <SongArt />
          <SongInfo />
        </View>

        <PlayButton />
      </View>
      <ProgressBar />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: "2%",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 64,
  },
  playerLeft: {
    flexDirection: "row",
    gap: "4%",
    height: "100%",
    alignItems: "center",
  },
});
