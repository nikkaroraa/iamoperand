import { GraphQLServer } from 'graphql-yoga';

import constants, { graphQLConfig } from './config/constants';
import Query from './graphql/resolvers/Query';


const { PORT } = constants;
const {
  GRAPHQL_TYPEDEFS_PATH,
  PLAYGROUND_URL,
} = graphQLConfig;


const resolvers = {
  Query,
};

const server = new GraphQLServer({
  typeDefs: GRAPHQL_TYPEDEFS_PATH,
  resolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
});


const options = {
  port: PORT,
  playground: PLAYGROUND_URL,
};

server.start(options, ({ port }) => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on PORT: ${port}`);
});
