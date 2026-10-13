import { StyleSheet, useColorScheme } from "react-native";
export const palette = {
  select: "#6699FF",
  selectBG: "#6699FF20",
  accent: "#A2A9B1",
};
const global = StyleSheet.create({
  icon: {
    fontSize: 20,
  },
  iconHuge: {
    fontSize: 60,
  },
});

export default global;

export function useColorMode() {
  const isDark = useColorScheme() === "dark";
  return {
    bg: isDark ? "#202122" : "#FFFFFF",
    bgTrans: isDark ? "#202122E6" : "#FFFFFFE6",
    sym: isDark ? "#FBFBFB" : "#000000",
    card: isDark ? "#27292D" : "#EAECF0",
    cardBorder: isDark ? "#2D2F33" : "#E6E6E7",
    cardShadow: isDark ? "" : "0 10px 8px rgba(0, 0, 0, 0.15)",
  };
}
