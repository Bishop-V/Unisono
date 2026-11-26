import { Text, View, StyleSheet, ScrollView, Pressable } from "react-native";
import global, { useTheme } from "@/style/global";
import LibraryCard from "@/components/library/LibraryCard";
export default function Library() {
  const t = useTheme();
  return (
    <ScrollView style={[{ backgroundColor: t.bg }]}>
      <LibraryCard icon="music-accidental-sharp" title="All songs" />
      <LibraryCard icon="trumpet" title="Jazz" />
      <LibraryCard icon="cheese" title="music for rats" />
      <LibraryCard icon="cheese-off" title="not music for rats" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
