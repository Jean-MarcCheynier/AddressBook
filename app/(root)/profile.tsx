import { SafeAreaView, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button, XStack, YStack } from "tamagui";
import useUserStore from "../../features/auth/auth.store";

export default function Profile() {
  const signOut = useUserStore((state) => state.signOut);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <XStack opacity={1} flex={1} bg={"$red4"}>
        <YStack opacity={1} flex={1} bg={"$blue4"}>
          <Button alignSelf="center" onPress={signOut}>
            Sign out
          </Button>
        </YStack>
      </XStack>
    </SafeAreaView>
  );
}
