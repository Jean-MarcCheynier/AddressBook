import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, XStack, YStack } from "tamagui";

import SignInForm from "../../features/auth/sign-in/sign-in.form";

export default function SignIn() {
  const router = useRouter();
  const handleOnPress = () => {
    router.push("/sign-up");
  };
  return (
    <XStack fullscreen={true} space>
      <YStack opacity={1} fullscreen={true} bg={"$blue4"} padding="$2">
        <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
          <YStack>
            <SignInForm />
          </YStack>
          <YStack>
            <Button variant="outlined" onPress={handleOnPress}>
              Sign Up!
            </Button>
          </YStack>
        </SafeAreaView>
      </YStack>
    </XStack>
  );
}
