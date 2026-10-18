import { Text, View, StyleSheet, ScrollView, Pressable } from "react-native";
import global, { useTheme } from "@/style/global";
import SearchBar from "@/components/SearchBar";
export default function Search() {
  const t = useTheme();
  return (
    <ScrollView style={[{ backgroundColor: t.bg }]}>
      <View>
        <SearchBar />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
