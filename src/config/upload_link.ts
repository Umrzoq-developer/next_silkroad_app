import { createUploadLink } from "apollo-upload-client";

export const httpLink = createUploadLink({
  uri: `${process.env.NEXT_PUBLIC_API_BASE_URL}/graphql`,
});
