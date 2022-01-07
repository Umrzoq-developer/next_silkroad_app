import { split } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { wsLink } from "./socket_link";
import { httpLink } from "./upload_link";

export const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);
