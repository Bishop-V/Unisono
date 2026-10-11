import { View, StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import global, { palette, useColorMode } from "@/styles/global";
import { LibraryHeaderRight } from "@/components/header/LibraryHeader";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

export default function TabLayout() {
  const c = useColorMode();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: palette.select,

        tabBarInactiveTintColor: c.sym,
        headerStatusBarHeight: 20,
        headerShadowVisible: false,
        tabBarStyle: {
          backgroundColor: c.bg,
          borderTopWidth: 0.2,
          justifyContent: "center",
          height: 75,
        },
        headerStyle: { backgroundColor: c.bg },
        sceneStyle: { paddingHorizontal: 16, backgroundColor: c.bg },
        headerTitleStyle: {
          color: c.sym,
        },
      }}
    >
      <Tabs.Screen
        name="Index"
        options={{
          title: "Library",
          // headerTitle: () => <HomeHeaderTitle />,
          //
          headerRight: () => <LibraryHeaderRight />,

          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.focusPill, focused && styles.focusHighlight]}>
              <MaterialCommunityIcons
                name={"minidisc"}
                style={global.icon}
                color={color}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="Search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.focusPill, focused && styles.focusHighlight]}>
              <MaterialCommunityIcons
                name={"magnify"}
                style={global.icon}
                color={color}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  focusHighlight: {
    backgroundColor: palette.selectBG,
  },
  focusPill: {
    width: 60,
    height: 30,
    borderRadius: 99,
    justifyContent: "center",
    alignItems: "center",
  },
});
