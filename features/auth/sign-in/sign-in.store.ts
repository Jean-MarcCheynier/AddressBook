import jwtDecode from "jwt-decode";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import signIn, { SignInPayload } from "./sign-in.fetch";

type User = {
  firstName: string;
  lastName: string;
  avatar: string;
};

export type State = {
  jwt?: string;
  user?: User;
  loading: boolean;
  error?: string;
};

type Actions = {
  signIn: (payload: SignInPayload) => void;
  signOut: () => void;
};

const useSignInStore = create(
  immer<State & Actions>((set) => ({
    loading: false,
    jwt: undefined,
    signIn: async (payload) => {
      set({ loading: true });
      try {
        const { access_token: jwt } = await signIn(payload);
        const user: User = jwtDecode(jwt);
        return set({ jwt, user, loading: false });
      } catch (error) {
        return set({
          jwt: undefined,
          loading: undefined,
          error: JSON.stringify(error),
        });
      }
    },
    signOut: () => set({ jwt: undefined, user: undefined }),
  })),
);

export default useSignInStore;
