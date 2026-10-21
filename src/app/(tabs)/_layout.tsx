import { View, StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import global, { palette, useTheme } from "@/style/global";
import { HomeHeaderRight } from "@/components/header/HomeHeader";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

export default function TabLayout() {
  const t = useTheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: palette.select,

        tabBarInactiveTintColor: t.text,
        headerStatusBarHeight: 20,
        headerShadowVisible: false,
        tabBarStyle: {
          backgroundColor: t.bg,
          borderTopWidth: 0.2,
          justifyContent: "center",
          height: 75,
        },
        headerStyle: { backgroundColor: t.bg },
        sceneStyle: { paddingHorizontal: 16, backgroundColor: t.bg },
        headerTitleStyle: {
          color: t.text,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          // headerTitle: () => <HomeHeaderTitle />,
          //
          headerRight: () => <HomeHeaderRight />,

          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.focusPill, focused && styles.focusHighlight]}>
              <MaterialCommunityIcons
                name={"home"}
                style={global.icon}
                color={color}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: "Library",
          // headerTitle: () => <HomeHeaderTitle />,
          //
          //headerRight: () => <LibraryHeaderRight />,

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
        name="search"
        options={{
          title: "Search",
          headerTitle: "",
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
