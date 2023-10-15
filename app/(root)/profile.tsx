import { SafeAreaView } from "react-native";
import { XStack, YStack } from "tamagui";

import SingOutButton from "../../features/auth/sign-out/sign-out-button";

export default function Profile() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <XStack opacity={1} flex={1} bg={"$red4"}>
        <YStack opacity={1} flex={1} bg={"$blue4"}>
          <SingOutButton />
        </YStack>
      </XStack>
    </SafeAreaView>
  );
}
