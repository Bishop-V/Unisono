import { Text, View, StyleSheet, Pressable } from "react-native";
import global, { useTheme, setTheme, colors } from "@/style/global";

export const ThemeOption = ({ name }: { name: keyof typeof colors }) => {
  const t = useTheme();
  const theme = colors[name];
  return (
    <Pressable
      onPress={() => setTheme(name)}
      style={[{ backgroundColor: t.card }, styles.main]}
    >
      <Text style={[{ color: t.text }, styles.title]}>{name}</Text>

      <View style={styles.colorPalette}>
        <View style={[styles.themePart, { backgroundColor: theme.bg }]} />
        <View style={[styles.themePart, { backgroundColor: theme.primary }]} />
        <View style={[styles.themePart, { backgroundColor: theme.text }]} />
        <View style={[styles.themePart, { backgroundColor: theme.card }]} />
        <View
          style={[styles.themePart, { backgroundColor: theme.cardBorder }]}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  main: {
    width: "auto",
    alignSelf: "flex-start",
    gap: "8%",
    paddingVertical: "2%",
    paddingHorizontal: "2%",
    marginVertical: "2%",
    marginHorizontal: "2%",
    borderRadius: 15,
  },
  themePart: {
    height: 24,
    aspectRatio: 1,
  },
  colorPalette: {
    flexDirection: "row",
  },
  title: {
    textTransform: "capitalize",
  },
});
