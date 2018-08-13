import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import constants, { graphQLConfig } from './config/constants';
import Query from './graphql/resolvers/Query';
import typeDefs from './graphql/types';


const { PORT, URL } = constants;
const {
  DEFAULT_QUERY,
  PLAYGROUND_URL,
} = graphQLConfig;

const resolvers = {
  Query,
};


const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    settings: {
      'editor.theme': 'dark',
      'editor.fontSize': 12,
      'editor.cursorShape': 'line',
      'prettier.printWidth': 80,
    },
    tabs: [
      {
        endpoint: URL,
        query: DEFAULT_QUERY,
      },
    ],
  },
});


const app = express();
server.applyMiddleware({
  app,
  path: PLAYGROUND_URL,
});


app.listen({ port: PORT }, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀  Server ready at ${URL}${server.graphqlPath}`);
});
