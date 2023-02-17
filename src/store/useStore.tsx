import { create } from "zustand";

type UserSchema = {
  id: string;
  name: string;
};

const logoutUser = async () => {
  // do something
};

export interface UserStore {
  user: UserSchema | null;
  login: (user: UserSchema) => void;
  logout: () => void;
}

export const useUser = create<UserStore>((set) => ({
  user: null,
  login: (user) => set({ user }),
  logout: async () => {
    await logoutUser();
    set({ user: null });
  },
}));
