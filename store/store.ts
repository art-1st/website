import create from "zustand";
import { SelectedTheme, Theme } from "interfaces/theme";
import { usePersistStore } from "./persist";

interface Store {
  currentTheme: () => SelectedTheme;
  currentSystemTheme: Theme;
  selectedTheme: SelectedTheme;

  setCurrentSystemTheme: (currentSystemTheme: Theme) => void;
  setSelectedTheme: (selectedTheme: SelectedTheme) => void;
}

export const useStore = create<Store>((set, get) => ({
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
  currentSystemTheme: "light",
  selectedTheme: "light",
  setCurrentSystemTheme: (currentSystemTheme) => {
    set({ currentSystemTheme });
  },
  setSelectedTheme: (selectedTheme) => {
    set({ selectedTheme });
  },
}));
