import { useState } from "react";
import { StyleSheet, Pressable } from "react-native";
import global, { useTheme } from "@/style/global";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  song?: String;
};

export default function PlayButton({ song }: Props) {
  const t = useTheme();
  const [playing, setPlaying] = useState(true);
  return (
    <Pressable onPress={() => setPlaying((p) => !p)}>
      <MaterialCommunityIcons
        style={[global.icon, { color: t.text }]}
        name={playing ? "play" : "pause"}
      ></MaterialCommunityIcons>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    paddingHorizontal: "2%",
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 19,
    borderWidth: 2,
  },
  searchBarLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: "5%",
  },
});
