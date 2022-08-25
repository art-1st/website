import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useStore } from "store/store";
import { usePersistStore } from "store/persist";

function MyApp({ Component, pageProps }: AppProps) {
  const { setCurrentSystemTheme } = useStore();

  useEffect(() => {
    if (window.matchMedia) {
      const initialSystemTheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches
        ? "dark"
        : "light";

      setCurrentSystemTheme(initialSystemTheme);

      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (event) => {
          setCurrentSystemTheme(event.matches ? "dark" : "light");
        });
    }
  }, [setCurrentSystemTheme]);

  return <Component {...pageProps} />;
}

export default MyApp;
