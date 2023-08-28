import { Ionicons } from "@expo/vector-icons";
import {
  Slot,
  Tabs,
  useNavigation,
  useRootNavigation,
  useRootNavigationState,
  useRouter,
} from "expo-router";
import { Text, View } from "react-native";

export default function HomeLayout() {
  return (
    <>
      <Tabs
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "home") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "profile") {
              iconName = focused ? "ios-list" : "ios-list-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      />
    </>
  );
}
