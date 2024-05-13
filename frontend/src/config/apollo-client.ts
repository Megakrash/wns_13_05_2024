import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:4000",
    credentials: "include",
    headers: {
      "apollo-require-preflight": "true",
    },
  }),
  cache: new InMemoryCache(),
});
