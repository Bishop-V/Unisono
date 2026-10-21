import { Image, StyleSheet } from "react-native";

export default function SongArt() {
  return (
    <Image
      style={styles.main}
      resizeMode="cover"
      source={require("../../assets/dots.jpg")}
    />
  );
}

const styles = StyleSheet.create({
  main: {
    width: 48,
    aspectRatio: 1,
    borderRadius: 4,
  },
});
