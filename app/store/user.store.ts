import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

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

export type SignInPayload = {
  username: string;
  password: string;
};

type Actions = {
  signIn: (payload: SignInPayload) => void;
  signOut: () => void;
};

const useUserStore = create(
  immer<State & Actions>((set) => ({
    loading: false,
    signIn: async (payload: SignInPayload) => {
      set({ loading: true });
      const res = await fetch("http://localhost:3000/auth/signin", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        return set({ jwt: undefined, loading: undefined });
      }
      const { access_token } = await res.json();
      return set({ jwt: access_token, loading: false });
    },
    signOut: () => set({ jwt: undefined }),
  }))
);

export default useUserStore;
