import { Slot } from "expo-router";
import Provider from "../context/auth/auth";
import { TamaguiProvider } from "tamagui";
import config from "../tamagui.config";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import useUserStore from "./store/user.store";
import useProtectedRoute from "./hooks/useProtectedRoute";

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "index",
};

export default function HomeLayout() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (loaded) {
      // can hide splash screen here
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <Provider>
        <Slot />
      </Provider>
    </TamaguiProvider>
  );
}
