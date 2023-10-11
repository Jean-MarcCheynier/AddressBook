import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import signIn, { SignInPayload } from "./sign-in/sign-in.fetch";
import signUp, { SignUpPayload } from "./sign-up/sign-up.fetch";

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
  signUp: (payload: SignUpPayload) => void;
  signOut: () => void;
};

const useUserStore = create(
  immer<State & Actions>((set) => ({
    loading: false,
    jwt: undefined,
    signIn: async (payload) => {
      set({ loading: true });
      try {
        const { access_token } = await signIn(payload);
        return set({ jwt: access_token, loading: false });
      } catch (error) {
        return set({
          jwt: undefined,
          loading: undefined,
          error: JSON.stringify(error),
        });
      }
    },
    signUp: async (payload) => {
      set({ loading: true, jwt: undefined });
      try {
        await signUp(payload);
        return set({ loading: false });
      } catch (error) {
        return set({
          jwt: undefined,
          loading: undefined,
          error: JSON.stringify(error),
        });
      }
    },
    signOut: () => set({ jwt: undefined }),
  }))
);

export default useUserStore;
