import { createTheme, colors } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      default: "#F4F6F8",
      paper: colors.common.white,
    },
    primary: {
      contrastText: "#ffffff",
      main: "#5664d2",
    },
    error: {
      main: "#d32f2f",
    },
    text: {
      primary: "#172b4d",
      secondary: "#6b778c",
    },
  },
});

export default theme;
