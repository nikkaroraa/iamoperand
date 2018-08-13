import dotenv from 'dotenv';


dotenv.config();

const PORT = process.env.PORT || 4040;
const config = {
  PORT,
};


const GRAPHQL_TYPEDEFS_PATH = './src/graphql/schema.graphql';
const PLAYGROUND_URL = '/playground';

export const graphQLConfig = {
  GRAPHQL_TYPEDEFS_PATH,
  PLAYGROUND_URL,
};

export default config;
