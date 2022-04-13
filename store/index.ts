import create from "zustand";
import { persist } from "zustand/middleware";

export type Theme = "light" | "dark";
export type ExtendedTheme = "system" | "light" | "dark";

export const ThemeColorset = {
  light: {
    color: 0x111111,
    backgroundColor: 0xd2d2d2,
  },
  dark: {
    color: 0x7d7d7d,
    backgroundColor: 0x111111,
  },
};

interface Store {
  theme: ExtendedTheme;
  setTheme: (theme: ExtendedTheme) => void;
}

export const useStore = create<Store>(
  persist(
    (set, get) => ({
      theme: "system",
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "art1st-store",
      getStorage: () => localStorage,
    }
  )
);
