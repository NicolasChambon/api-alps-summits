import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { SummitResolver } from "./resolvers/SummitResolver";
import { RangeResolver } from "./resolvers/RangeResolver";

async function startServer() {
  const schema = await buildSchema({
    resolvers: [SummitResolver, RangeResolver],
  });

  const server = new ApolloServer({ schema });

  const { url } = await server.listen(4000);
  console.log(`🚀 Server ready at ${url}`);
}

startServer();
