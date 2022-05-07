import { Global, ThemeProvider } from "@emotion/react";
import { theme } from "@main/utils";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Global
      styles={(theme) => ({
        "*": {
          background: theme.color.background,
          fontFamily:
            // eslint-disable-next-line max-len
            '"Roboto Mono",Montserrat,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
          color: "#ffffff",
        },
      })}
    />
    <Component {...pageProps} style={{ backgroundColor: "red" }} />
  </ThemeProvider>
);

export default MyApp;
