import { ApolloClient, InMemoryCache } from "@apollo/client";
// import { authLink } from "./auth_link";
// import { errorLink } from "./catch_error";
// import { splitLink } from "./split_link";
import { defaultOptions } from "./default_options";

export const client = new ApolloClient({
  ssrMode: true,
  uri: `${process.env.NEXT_ENV_API_BASE_URL}/graphql`,
  cache: new InMemoryCache(),
  defaultOptions,
});
