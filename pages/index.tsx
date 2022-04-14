import styled from "@emotion/styled";
import type { NextPage } from "next";
import Head from "next/head";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { ExtendedTheme, Theme, ThemeColorset, useStore } from "../store";
import * as THREE119 from "three119";
import NET from "vanta/dist/vanta.net.min";

const Home: NextPage = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const vantaRef = useRef<any>();
  const { theme, setTheme } = useStore();
  const [systemTheme, setSystemTheme] = useState<Theme | null>(null);

  useEffect(() => {
    if (window.matchMedia) {
      setSystemTheme(
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
      );

      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (event) => {
          setSystemTheme(event.matches ? "dark" : "light");
        });
    }

    vantaRef.current = NET({
      el: backgroundRef.current,
      THREE: THREE119,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x7d7d7d,
      backgroundColor: 0x111111,
      points: 20.0,
    });
  }, []);

  useEffect(() => {
    switch (theme) {
      case "system":
        setVantaTheme(systemTheme ?? "light");
        break;
      case "light":
        setVantaTheme("light");
        break;
      case "dark":
        setVantaTheme("dark");
        break;
    }
  }, [theme, systemTheme]);

  const setVantaTheme = (theme: Theme) => {
    vantaRef.current.setOptions(ThemeColorset[theme]);
    // vantaRef.current.resize();
  };

  const onChangeThemeRadio = (e: ChangeEvent<HTMLInputElement>) => {
    setTheme(e.currentTarget.value as ExtendedTheme);
  };

  return (
    <Container>
      <Head>
        <title>art1st.me</title>
        <meta name="title" content="art1st.me" />
        <meta name="description" content="Personal Website of YoonHwan Cho" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background ref={backgroundRef} />
      <Screen>
        <div style={{ backgroundColor: "white" }}>
          <input
            type="radio"
            id="theme_r_system"
            name="theme"
            value="system"
            checked={theme === "system"}
            onChange={onChangeThemeRadio}
          />
          <label htmlFor="theme_r_system">system</label>
          <input
            type="radio"
            id="theme_r_light"
            name="theme"
            value="light"
            checked={theme === "light"}
            onChange={onChangeThemeRadio}
          />
          <label htmlFor="theme_r_light">light</label>
          <input
            type="radio"
            id="theme_r_dark"
            name="theme"
            value="dark"
            checked={theme === "dark"}
            onChange={onChangeThemeRadio}
          />
          <label htmlFor="theme_r_dark">dark</label>
        </div>
      </Screen>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
`;

const Screen = styled.main`
  display: none; // Temporarily hide
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
`;

export default Home;
