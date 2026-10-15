import { Directory } from "expo-file-system";
import { Link } from "expo-router";
import { StyleSheet, Text } from "react-native";
type MusicLibraryListProps = { directory: Directory };
export function MusicLibraryList = async({ directory }: MusicLibraryListProps) {
  const items = directory.list();
  return (
    <Link href="/Settings" asChild>
      <Text>Music Librar </Text>
    </Link>
  );
}

const styles = StyleSheet.create({});
