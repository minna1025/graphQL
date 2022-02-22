import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolevers";

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers,
});

server.start(() => {});
