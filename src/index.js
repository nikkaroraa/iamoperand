import { GraphQLServer } from 'graphql-yoga';

import constants from './config/constants';


const { PORT } = constants;

const typeDefs = `
  type Query {
    info: String!
  }
`;

const resolvers = {
  Query: {
    info: () => 'GraphQL is awesome!',
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});


const options = {
  port: PORT,
  playground: '/playground',
};

server.start(options, ({ port }) => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on PORT: ${port}`);
});
