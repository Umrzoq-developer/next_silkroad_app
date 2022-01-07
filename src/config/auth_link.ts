import { AUTH_TOKEN } from "@/constants/ApiConstant";
import { setContext } from "@apollo/client/link/context";
import Cookies from "js-cookie";

export const authLink = setContext((_operation, prevContext) => {
  const { headers } = prevContext;

  // const [token] = useCookies([AUTH_TOKEN]);
  const token = Cookies.get(AUTH_TOKEN);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : undefined,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
  };
});
