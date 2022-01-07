import { AUTH_TOKEN } from "@/constants/ApiConstant";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Cookies from "js-cookie";
import { useMemo } from "react";
import { defaultOptions } from "./default_options";

const httpLink = createHttpLink({
  uri: `${process.env.API_BASE_URL}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  const token = Cookies.get(AUTH_TOKEN);

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

let apolloClient: any;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    // uri: `${process.env.API_BASE_URL}/graphql`,
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    defaultOptions,
  });
}

export function useApollo(initialState: any) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}

export function initializeApollo(initialState: any = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    const existingCache = _apolloClient.extract();

    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  if (typeof window === "undefined") return _apolloClient;

  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}
