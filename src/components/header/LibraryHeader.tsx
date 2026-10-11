import { StyleSheet, View, Pressable } from "react-native";
import { Link } from "expo-router";
import global, { useColorMode } from "@/styles/global";
import { MaterialIcons } from "@expo/vector-icons";
export function LibraryHeaderRight() {
  const c = useColorMode();
  return (
    <Link href="/Settings" asChild>
      <Pressable>
        <MaterialIcons name={"settings"} style={global.icon} />
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({});
