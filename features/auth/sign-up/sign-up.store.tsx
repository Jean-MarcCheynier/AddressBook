import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import signUp, { SignUpPayload } from "../sign-up/sign-up.fetch";

export type State = {
  success: boolean;
  loading: boolean;
  error?: string;
};

type Actions = {
  signUp: (payload: SignUpPayload) => void;
};

const useSignUpStore = create(
  immer<State & Actions>((set) => ({
    loading: false,
    success: false,
    signUp: async (payload) => {
      set({ loading: true, success: false });
      try {
        await signUp(payload);
        set({ loading: false, success: true });
      } catch (error) {
        return set({
          success: false,
          loading: undefined,
          error: JSON.stringify(error),
        });
      }
    },
  })),
);

export default useSignUpStore;
