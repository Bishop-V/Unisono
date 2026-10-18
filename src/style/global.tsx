import { StyleSheet, useColorScheme } from "react-native";

export const palette = {
  select: "#6699FF",
  selectBG: "#6699FF20",
  accent: "#A2A9B1",
};

//light/dark variants
const colors = {
  light: {
    bg: "#fff",
    text: "#000",
    primary: "#6c5ce7",
    card: "#EAECF0",
    cardBorder: "#E6E6E7",
  },
  dark: {
    bg: "#000",
    text: "#fff",
    primary: "#a29bfe",
    card: "#27292D",
    cardBorder: "#2D2F33",
  },
};

export function useTheme() {
  return useColorScheme() === "dark" ? colors.dark : colors.light;
}

const global = StyleSheet.create({
  icon: {
    fontSize: 20,
  },
  iconHuge: {
    fontSize: 60,
  },
});

export default global;
