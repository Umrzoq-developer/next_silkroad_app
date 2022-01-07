import "antd/dist/antd.css";
import "../styles/globals.css";
import "styles/App.module.scss";
import { RecoilRoot } from "recoil";
import { CookiesProvider } from "react-cookie";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
// import {client} from "../src/config/ApolloConfig";
import { client } from "@/config/apollo_client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
      <RecoilRoot>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </RecoilRoot>
    </CookiesProvider>
  );
}

export default MyApp;
