import { Button } from "tamagui";

import useSignInStore from "../sign-in/sign-in.store";

const SingOutButton = () => {
  const signOut = useSignInStore((state) => state.signOut);
  return (
    <Button alignSelf="center" onPress={signOut}>
      Sign out
    </Button>
  );
};

export default SingOutButton;
