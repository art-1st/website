import { SelectedTheme } from "interfaces/theme";
import create from "zustand";
import { persist } from "zustand/middleware";

interface PersistStore {
  selectedTheme: SelectedTheme | null;
  setSelectedTheme: (theme: SelectedTheme) => void;
}

export const usePersistStore = create<PersistStore>(
  persist(
    (set, get) => ({
      selectedTheme: null,
      setSelectedTheme: (selectedTheme) => set({ selectedTheme }),
    }),
    {
      name: "site-configurations",
      getStorage: () => localStorage,
    }
  )
);
