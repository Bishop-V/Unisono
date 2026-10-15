import { MusicLibraryList } from "@/components/MusicLibraryList";
import { useColorMode } from "@/styles/global";
import { Directory, Paths } from "expo-file-system";
import { ScrollView, StyleSheet } from "react-native";

export default function Library() {
  const c = useColorMode();
  const direc = "../../../assets/music";
  const libraryFolder = new Directory(Paths.cache, direc);
  // const items = libraryFolder.list();

  return (
    <ScrollView style={[{ backgroundColor: c.bg }]}>
      <MusicLibraryList directory={libraryFolder} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
