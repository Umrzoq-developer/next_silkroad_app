import "antd/dist/antd.css";
import "../styles/globals.css";
import "styles/App.module.scss";
import { RecoilRoot } from "recoil";
import { CookiesProvider } from "react-cookie";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
// import {client} from "../src/config/ApolloConfig";
import { useApollo } from "@/config/apollo_client";

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <CookiesProvider>
      <RecoilRoot>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </RecoilRoot>
    </CookiesProvider>
  );
}

export default MyApp;
