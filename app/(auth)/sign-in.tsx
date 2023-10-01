import { XStack, YStack } from "tamagui";
import SignInForm from "../features/auth/signin/sign-in.form";
import useUserStore from "../store/user.store";

export default function SignIn() {
  const signIn = useUserStore((state) => state.signIn);
  return (
    <XStack fullscreen={true} space>
      <YStack opacity={1} fullscreen={true} bg={"$blue4"}>
        <SignInForm onSubmit={signIn} />
      </YStack>
      <YStack />
      <YStack />
    </XStack>
  );
}
