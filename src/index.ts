import { GraphQLServer } from 'graphql-yoga';
import { prisma } from './generated/prisma-client';
import resolvers from './resolvers';
import permissions from './permissions';
import algoliasearch = require('algoliasearch');

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  middlewares: [permissions],
  context: request => ({
    ...request,
    prisma,
    algolia: algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_API_KEY),
  }),
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
