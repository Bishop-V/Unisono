import { useColorMode } from "@/styles/global";
import { useAudioPlayer, useAudioPlayerStatus } from "expo-audio";
import { Button, ScrollView, StyleSheet, Text } from "react-native";

const audiopath = require("../../../assets/music/Cotards-Solution.mp3");

export default function play() {
  const audiopath = require("../../../assets/music/Cotards-Solution.mp3");
  const player = useAudioPlayer(audiopath);
  const status = useAudioPlayerStatus(player);

  const c = useColorMode();
  if (Math.trunc(status.currentTime) == Math.trunc(5)) {
    player.seekTo(80);
  }
  return (
    <ScrollView style={[{ backgroundColor: c.bg }]}>
      <Button title="play" onPress={() => player.play()} />

      <Button title="pause" onPress={() => player.pause()} />

      <Button title="reset" onPress={() => player.seekTo(0)} />

      <Button title="skip to" onPress={() => player.seekTo(80)} />
      <Text>timestamp: {status.currentTime}</Text>
      <Text>duration: {status.duration}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
