import { StyleSheet, View, Pressable } from "react-native";
import { Link } from "expo-router";
import global, { useTheme } from "@/style/global";
import { MaterialIcons } from "@expo/vector-icons";
export function HomeHeaderRight() {
  const t = useTheme();
  return (
    <Link href="/settings" asChild>
      <Pressable>
        <MaterialIcons
          name={"settings"}
          style={[global.icon, { color: t.text }]}
        />
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({});
