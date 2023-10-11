import { Button, XStack, YStack } from "tamagui";
import SignInForm from "../../features/auth/sign-in/sign-in.form";
import { Link, useNavigation, useRouter } from "expo-router";

export default function SignIn() {
  const router = useRouter();
  const handleOnPress = () => {
    router.push("/sign-up");
  };
  return (
    <XStack fullscreen={true} space alignSelf="center" alignContent="center">
      <YStack
        alignContent="center"
        gap={5}
        style={{ paddingHorizontal: 10 }}
        opacity={0.5}
        fullscreen={true}
        bg={"$blue4"}
      >
        <YStack>
          <SignInForm />
        </YStack>
        <YStack>
          <Button onPress={handleOnPress} variant="outlined">
            Sign Up!
          </Button>
        </YStack>
      </YStack>
    </XStack>
  );
}
