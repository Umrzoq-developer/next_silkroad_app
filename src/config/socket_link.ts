import { WebSocketLink } from "./WebSocketLink";

// Socket connection
export const wsLink = new WebSocketLink({
  url: `${process.env.NEXT_PUBLIC_WEBSOCKET_BASE_URL}/subscriptions`,
});
