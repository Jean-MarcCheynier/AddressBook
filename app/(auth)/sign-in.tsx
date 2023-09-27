import { Text, View } from "react-native";
import { useAuth } from "../../context/auth/auth";
import { Button, XStack } from "tamagui";
import { YStack } from "tamagui";

export default function SignIn() {
  const { signIn } = useAuth();
  return (
    <XStack fullscreen={true} space>
      <YStack opacity={1} fullscreen={true} backgroundColor={"#ccc"}>
        <Text>coucou</Text>
        <Button>coucou</Button>
      </YStack>
      <YStack />
      <YStack />
    </XStack>
  );
}
