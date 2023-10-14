import { Button, XStack, YStack, useTheme } from "tamagui";
import SignUpForm from "../../features/auth/sign-up/sign-up.form";
import { useRouter } from "expo-router";
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const SignUp = () => {
  const router = useRouter();
  const handleOnPress = () => router.push("/sign-in");
  return (
    <XStack fullscreen={true} space>
      <YStack opacity={1} fullscreen={true} bg={"$blue4"} padding="$2">
        <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
          <YStack>
            <SignUpForm />
          </YStack>
          <YStack>
            <Button variant="outlined" onPress={handleOnPress}>
              Already have an account? Sign In!
            </Button>
          </YStack>
        </SafeAreaView>
      </YStack>
    </XStack>
  );
};

export default SignUp;
