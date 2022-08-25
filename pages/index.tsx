import styled from "@emotion/styled";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Theme } from "interfaces/theme";
import { useStore } from "../store/store";
import { usePersistStore } from "store/persist";

const Home: NextPage = () => {
  const { currentTheme } = useStore();
  const { selectedTheme } = usePersistStore();
  const [systemTheme, setSystemTheme] = useState<Theme | null>(null);

  useEffect(() => {}, []);

  return (
    <Container>
      <Head>
        <title>www.art1st.me</title>
        <meta name="title" content="art1st.me" />
        <meta name="description" content="art1st.me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello World!</h1>
      <div>Current Theme: {currentTheme().toString()}</div>
      <div>User Selected Theme: {selectedTheme ?? "not selected"}</div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export default Home;
