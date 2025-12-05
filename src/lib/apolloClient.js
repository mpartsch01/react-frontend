import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
    link: new HttpLink({
        uri: "https://wordpress-321502-6040557.cloudwaysapps.com/graphql",
    }),
    cache: new InMemoryCache(),
});

export default client;
