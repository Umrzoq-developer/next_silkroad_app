import { ApolloClient, InMemoryCache } from "@apollo/client";
import { authLink } from "./auth_link";
import { errorLink } from "./catch_error";
import { defaultOptions } from "./default_options";
import { splitLink } from "./split_link";

export const client = new ApolloClient({
  ssrMode: true,
  link:
    process.env.NODE_ENV === "development"
      ? errorLink.concat(authLink.concat(splitLink))
      : authLink.concat(splitLink),
  cache: new InMemoryCache(),
  defaultOptions,
});
