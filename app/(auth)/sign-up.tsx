import { Button, XStack, YStack } from "tamagui";
import SignUpForm from "../../features/auth/sign-up/sign-up.form";
import { useRouter } from "expo-router";

const SignUp = () => {
  const router = useRouter();
  const handleOnPress = () => router.push("/sign-in");
  return (
    <XStack fullscreen={true} space>
      <YStack opacity={1} fullscreen={true} bg={"$blue4"}>
        <SignUpForm />
        <YStack>
          <Button variant="outlined" onPress={handleOnPress}>
            Already have an account? Sign In!
          </Button>
        </YStack>
      </YStack>
    </XStack>
  );
};

export default SignUp;
