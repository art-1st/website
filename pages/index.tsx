import styled from "@emotion/styled";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef } from "react";
import { Box, Button, Card, Typography } from "@mui/material";
import * as PIXI from "pixi.js";
import { KawaseBlurFilter } from "@pixi/filter-kawase-blur";
// import { usePersistStore } from "store/persist";
// import { useStore } from "store/store";
import { ColorPalette, Orb } from "lib/orbAnimator";
import { OpenInNew } from "@mui/icons-material";
import theme from "lib/theme";

const Home: NextPage = () => {
  // const { currentTheme, currentSystemTheme, selectedTheme } = useStore();
  // const { setSelectedTheme } = usePersistStore();
  const orbCanvasRef = useRef<HTMLCanvasElement>(null);
  const orbApp = useRef<PIXI.Application>();

  // const selectTheme = (theme: SelectedTheme) => {
  //   setSelectedTheme(theme);
  // };

  useEffect(() => {
    if (!orbCanvasRef.current) return;

    orbApp.current = new PIXI.Application({
      view: orbCanvasRef.current,
      resizeTo: window,
      backgroundColor: 0xffffff,
      backgroundAlpha: 0.825,
      useContextAlpha: "notMultiplied",
    });

    const colorPalette = new ColorPalette();
    orbApp.current.stage.filters = [new KawaseBlurFilter(30, 10, true)];

    const orbs: Orb[] = [];
    const orbCount = 10;

    for (let i = 0; i < orbCount; i++) {
      const orb = new Orb(+colorPalette.randomColor());
      orbApp.current.stage.addChild(orb.graphics);
      orbs.push(orb);
    }

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      orbApp.current.ticker.add(() => {
        orbs.forEach((orb) => {
          orb.update();
          orb.render();
        });
      });
    } else {
      orbs.forEach((orb) => {
        orb.update();
        orb.render();
      });
    }
  }, []);

  return (
    <Container>
      <Head>
        <title>Yoon Hwan &quot;Leo&quot; Cho</title>
      </Head>
      <OrbCanvas ref={orbCanvasRef} />
      <Box sx={{ px: "6vw" }}>
        <Card
          variant="outlined"
          sx={{
            px: 8,
            py: 4,
            borderRadius: 6,
            background: "rgba(255, 255, 255, 0.35)",
          }}
        >
          <Box>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              안녕하세요!
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              안녕하세요. 얼리어답터, 패스트러너, 제너럴리스트 조윤환입니다.
              최신 IT 기술이나 하드웨어에 관심이 많아 해외 직구, 베타
              소프트웨어등을 통해 먼저 써보고 기술의 원리를 탐구하기 좋아합니다.
              그리고 2017년부터 Serverless Framework 등 최신 기술들을 빠르게
              사용해보며 기술에 대한 시야를 넓혔습니다. 이러한 경험들을 바탕으로
              현재 스타트업 프론트엔드 개발 경력 4년차 근무중이며, 이전에는
              마크업 개발자로 4년간 근무하며 가장 근본적인 웹표준 마크업과
              웹접근성 부터 프론트엔드 기술 Stack 다수를 경험했습니다. 그리고
              회사 내 전반적인 개발 인프라(AWS) 관리, 주요 프로젝트 설계에도
              참여하여 인프라 레벨에서 엔드유저의 화면까지 전체적인 개발
              라이프사이클을 경험하며 최상의 사용자 경험을 만들어낼 수 있도록
              노력하였습니다.
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                mt: 4,
                [theme.breakpoints.down("md")]: {
                  flexDirection: "column",
                  gap: 1,
                  mt: 2,
                },
              }}
            >
              <Button
                LinkComponent="a"
                href="https://yoonhwancho.notion.site/6dcda75c978746e2b6af21f64f241919"
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                color="success"
                endIcon={<OpenInNew />}
              >
                자기소개서 및 경력기술서
              </Button>
              <Button
                LinkComponent="a"
                href="https://github.com/art-1st"
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                color="inherit"
                endIcon={<OpenInNew />}
              >
                GitHub
              </Button>
              <Button
                LinkComponent="a"
                href="https://www.linkedin.com/in/yoonhwan-cho-97493b141/"
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                color="inherit"
                endIcon={<OpenInNew />}
              >
                LinkedIn
              </Button>
            </Box>
          </Box>
        </Card>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  h1 {
    margin: 0.25em 0;
  }
`;

const OrbCanvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
`;

export default Home;
