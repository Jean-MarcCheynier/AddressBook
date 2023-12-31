import { useRouter, useSegments } from "expo-router";
import { useEffect } from "react";

import useSignInStore from "../features/auth/sign-in/sign-in.store";

// This hook will protect the route access based on user authentication.
const useProtectedRoute = () => {
  const segments = useSegments();
  const router = useRouter();
  const user = useSignInStore((state) => state.user);

  useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";

    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !user &&
      !inAuthGroup
    ) {
      // Redirect to the sign-in page.
      router.replace("/sign-in");
    } else if (user && inAuthGroup) {
      // Redirect away from the sign-in page.
      router.replace("/home");
    }
  }, [user, segments, router]);
};

export default useProtectedRoute;
