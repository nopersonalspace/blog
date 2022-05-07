import "../styles/prism-duotone-space.css";

import { Global, ThemeProvider } from "@emotion/react";
import { FlexColumnCenterBoth } from "@main/components";
import { StyleUtils, theme, useRouterLoading } from "@main/utils";
import type { AppProps } from "next/app";
import Prism from "prismjs";
import { useEffect } from "react";
import { Spinner } from "theme-ui";

require("prismjs/components/prism-javascript");
require("prismjs/components/prism-css");
require("prismjs/components/prism-jsx");

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { loading, error } = useRouterLoading();

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  if (error) {
    return <div>There has been a next.js routing error :/</div>;
  }

  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={(theme) => ({
          body: {
            background: theme.colors.background,
            fontFamily:
              // eslint-disable-next-line max-len
              '"Roboto Mono",Montserrat,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
            color: "#ffffff",
            margin: 0,
          },
          p: {
            fontSize: "16px",
            fontWeight: StyleUtils.FontWeight.normal,
          },
          h1: {
            fontSize: StyleUtils.FontSize.xl,
            fontWeight: StyleUtils.FontWeight.black,
          },
        })}
      />
      {loading ? (
        <FlexColumnCenterBoth style={{ width: "100%", height: "98vh" }}>
          {" "}
          <Spinner size={96} />
        </FlexColumnCenterBoth>
      ) : (
        <Component {...pageProps} style={{ backgroundColor: "red" }} />
      )}
    </ThemeProvider>
  );
};

export default MyApp;
