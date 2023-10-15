import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { useEffect } from "react";
import { TamaguiProvider } from "tamagui";

import Provider from "../context/auth/auth";
import config from "../tamagui.config";

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
