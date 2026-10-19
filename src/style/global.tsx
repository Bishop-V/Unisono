import { StyleSheet, useColorScheme } from "react-native";
import { useSyncExternalStore } from "react";

export const palette = {
  select: "#6699FF",
  selectBG: "#6699FF20",
  accent: "#A2A9B1",
};

//Variants
export const colors = {
  default: {
    bg: "#000",
    text: "#fff",
    primary: "#a29bfe",
    card: "#27292D",
    cardBorder: "#2D2F33",
  },
  magpie: {
    bg: "#fff",
    text: "#fff",
    primary: "#a29bfe",
    card: "#27292D",
    cardBorder: "#2D2F33",
  },
};

//Default theme
let theme = colors.default;
const listeners = new Set<() => void>();

export const useTheme = () =>
  useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    () => theme,
  );

export const setTheme = (name: keyof typeof colors) => {
  theme = colors[name];
  listeners.forEach((l) => l());
};

const global = StyleSheet.create({
  icon: {
    fontSize: 20,
  },
  iconHuge: {
    fontSize: 60,
  },
  header1: {
    fontSize: 23,
  },
});

export default global;
