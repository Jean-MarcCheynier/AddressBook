import { Text, View } from "react-native";
import { useAuth } from "../../context/auth/auth";
import { Button, XStack } from "tamagui";
import { YStack } from "tamagui";
import SignInForm from "../features/auth/signin/sign-in.form";

export default function SignIn() {
  const { signIn } = useAuth();
  return (
    <XStack fullscreen={true} space>
      <YStack opacity={1} fullscreen={true} bg={"$blue4"}>
        <SignInForm />
      </YStack>
      <YStack />
      <YStack />
    </XStack>
  );
}
