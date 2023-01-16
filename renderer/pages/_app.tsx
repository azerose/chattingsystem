import React from "react";
import type { AppProps } from "next/app";
import "antd/dist/antd.css";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <>
        <Component {...pageProps} />
      </>
    </RecoilRoot>
  );
}

export default MyApp;
