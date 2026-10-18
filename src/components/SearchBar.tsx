//Skeleton for settings options.
import { ComponentProps } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import global, { useTheme } from "@/style/global";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function SearchBar() {
  const t = useTheme();
  return (
    <View
      style={[
        styles.searchBar,
        { backgroundColor: t.card, borderColor: t.cardBorder },
      ]}
    >
      <View style={[styles.searchBarLeft]}>
        <MaterialCommunityIcons
          name="magnify"
          style={[global.icon, { color: t.text }]}
        ></MaterialCommunityIcons>
        <Text style={[{ color: t.text }]}>Search</Text>
      </View>
    </View>
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
