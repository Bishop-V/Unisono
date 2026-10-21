import { ComponentProps } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import global, { useTheme } from "@/style/global";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PlayButton from "./PlayButton";

export default function PlayerPopup() {
  const t = useTheme();
  return (
    <View styles={styles.main}>
      <View style={[styles.controls, { backgroundColor: t.bg }]}>
        <View style={styles.playerLeft}>
          {/* <SongArt key={song.name}/> */}
          {/* <SongCard key={song.name} title={song.name}/> */}
        </View>

        <PlayButton />
      </View>
      {/* <ProgressBar /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {},
  controls: {
    flexDirection: "row",
  },
  playerLeft: {
    flexDirection: "row",
  },
});
