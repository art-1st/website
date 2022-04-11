import styled from "@emotion/styled";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import * as THREE119 from "three119";
import GLOBE from "vanta/dist/vanta.globe.min";

const Home: NextPage = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>();

  useEffect(() => {
    if (backgroundRef.current) {
      setVantaEffect(
        GLOBE({
          el: backgroundRef.current,
          THREE: THREE119,
        })
      );
    }
  }, []);

  return (
    <Main>
      <Head>
        <title>art1st.me</title>
        <meta name="title" content="art1st.me" />
        <meta name="description" content="Personal Website of YoonHwan Cho" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background ref={backgroundRef} />
    </Main>
  );
};

const Main = styled.main`
  width: 100%;
  height: 100%;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
`;

export default Home;
