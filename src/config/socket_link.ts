import { AUTH_TOKEN } from "@/constants/ApiConstant";
import Cookies from "js-cookie";
import { SubscriptionClient } from "subscriptions-transport-ws";
import { WebSocketLink } from "./WebSocketLink";

// Socket connection
export const wsLink = new WebSocketLink({
  url: `${process.env.WEBSOCKET_BASE_URL}/subscriptions`,
});

// const createWSLink = () => {
//     return new WebSocketLink(
//       new SubscriptionClient('wss://ready-panda-91.hasura.app/v1/graphql', {
//         url: '',
//         lazy: true,
//         reconnect: true,
//         connectionParams: async () => {
//         //   await requestAccessToken() // happens on the client
//             const accessToken = await Cookies.get(AUTH_TOKEN);
//           return {
//             headers: {
//               authorization: accessToken ? `Bearer ${accessToken}` : '',
//             },
//           }
//         },
//       })
//     )
//   }
