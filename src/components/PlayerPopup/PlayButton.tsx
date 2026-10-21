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

const styles = StyleSheet.create({});
