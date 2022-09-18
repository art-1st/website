import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useStore } from "store/store";
import { usePersistStore } from "store/persist";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const { setCurrentSystemTheme, setSelectedTheme } = useStore();
  const { selectedTheme } = usePersistStore();

  useEffect(() => {
    if (selectedTheme) {
      setSelectedTheme(selectedTheme);
    }

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
  }, [selectedTheme, setCurrentSystemTheme, setSelectedTheme]);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="viewport-fit=cover, width=device-width, initial-scale=1"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
