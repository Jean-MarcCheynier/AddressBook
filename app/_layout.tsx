import { Ionicons } from "@expo/vector-icons";
import { Slot, Tabs } from "expo-router";
import { Provider } from "../context/auth/auth";

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "index",
};

export default function HomeLayout() {
  return (
    <Provider>
      <Slot />
    </Provider>
  );
}
