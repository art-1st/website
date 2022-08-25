import { SelectedTheme } from "interfaces/theme";
import create from "zustand";
import { persist } from "zustand/middleware";

interface PersistStore {
  selectedTheme: SelectedTheme | null;
  setTheme: (theme: SelectedTheme) => void;
}

export const usePersistStore = create<PersistStore>(
  persist(
    (set, get) => ({
      selectedTheme: null,
      setTheme: (selectedTheme) => set({ selectedTheme }),
    }),
    {
      name: "site-configurations",
      getStorage: () => localStorage,
    }
  )
);
