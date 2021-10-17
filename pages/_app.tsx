import "../styles/theme";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import React from "react";
import Head from "next/head";
import theme from "../styles/theme";
import CssBaseline from "@mui/material/CssBaseline"; // reset

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <Head>
        <title>Crypto Portfolio</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="theme-color" content={theme.palette.primary.main} />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.StrictMode>
  );
}
export default MyApp;
