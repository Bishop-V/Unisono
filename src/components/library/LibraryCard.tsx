import { ComponentProps } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import global, { useTheme } from "@/style/global";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router, type Href } from "expo-router";

type Props = {
  icon: ComponentProps<typeof MaterialCommunityIcons>["name"];
  title: string;
  position: number;
  href: Href;
};

export default function LibraryCard({ icon, title, href }: Props) {
  const t = useTheme();
  return (
    <Pressable
      style={[styles.libraryCard]}
      onPress={() => router.navigate(href)}
    >
      <View style={styles.libraryCardLeft}>
        <MaterialCommunityIcons
          style={[global.iconHuge, { color: t.text }]}
          name={icon}
        />

        <Text style={[{ color: t.text }, global.header1]}>{title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  libraryCard: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  libraryCardLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  libraryCardRight: {},
});
