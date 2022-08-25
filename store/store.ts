import create from "zustand";
import { SelectedTheme, Theme } from "interfaces/theme";
import { usePersistStore } from "./persist";

interface Store {
  currentSystemTheme: Theme;
  currentTheme: () => SelectedTheme;

  setCurrentSystemTheme: (theme: Theme) => void;
}

export const useStore = create<Store>((set, get) => ({
  currentSystemTheme: "light",
  currentTheme: () => {
    const userSelectedTheme = usePersistStore.getState().selectedTheme;
    if (userSelectedTheme) {
      switch (userSelectedTheme) {
        case "system":
          return get().currentSystemTheme;
        default:
          return userSelectedTheme;
      }
    } else {
      return get().currentSystemTheme;
    }
  },
  setCurrentSystemTheme: (theme) => {
    set({ currentSystemTheme: theme });
  },
}));
