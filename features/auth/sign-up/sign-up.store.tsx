import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import signUp, {
  BadRequestServerError,
  SignUpPayload,
} from '../sign-up/sign-up.fetch';

export type State = {
  success: boolean;
  loading: boolean;
  error?: ServerErrorResponse;
};

export type ServerErrorResponse = {
  error: string;
  statusCode: number;
  message: { field: string; error: { [key: string]: string } }[];
};

type Actions = {
  signUp: (payload: SignUpPayload) => Promise<void>;
  reset: () => void;
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
      } catch (error: unknown) {
        let errorContent: ServerErrorResponse | undefined;
        if (error instanceof BadRequestServerError) {
          console.error('BadRequestServerError');
          errorContent = {
            message: error.response.message,
            error: error.response.error,
            statusCode: error.response.statusCode,
          };
        }
        set({
          success: false,
          loading: false,
          error: errorContent,
        });
      }
    },
    reset: () => {
      set({ loading: true, success: false });
    },
  })),
);

export default useSignUpStore;
