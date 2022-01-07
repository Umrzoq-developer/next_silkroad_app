import { createUploadLink } from "apollo-upload-client";

export const httpLink = createUploadLink({
  uri: `${process.env.API_BASE_URL}/graphql`,
});
