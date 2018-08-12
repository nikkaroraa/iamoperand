import { GraphQLServer } from 'graphql-yoga';

import constants from './config/constants';


const { PORT } = constants;
const isProduction = (process.env.NODE_ENV === 'production');

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


let playground = '/playground';
if (isProduction) {
  playground = false;
}

const options = {
  port: PORT,
  playground,
};

server.start(options, ({ port }) => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on PORT: ${port}`);
});
