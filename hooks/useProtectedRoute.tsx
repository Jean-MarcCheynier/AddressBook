import { useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import useUserStore from "../features/auth/auth.store";

// This hook will protect the route access based on user authentication.
const useProtectedRoute = () => {
  const segments = useSegments();
  const router = useRouter();
  const user = useUserStore((state) => state.user);

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
  }, [user, segments]);
};

export default useProtectedRoute;
