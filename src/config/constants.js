import dotenv from 'dotenv';


dotenv.config();

const PORT = process.env.PORT || 4040;

let URL = `http://localhost:${PORT}`;

const isProduction = (process.env.NODE_ENV === 'production');

if (isProduction === true) {
  URL = 'https://iamoperand.now.sh';
}

const config = {
  PORT,
  URL,
};


const PLAYGROUND_URL = '/';


const DEFAULT_QUERY = `
  query {
    name
    email
    age
    github
    medium
    twitter
    stackoverflow
    projects {
      name
      description
      github
      website
      technologies
    }
    jobs {
      company
      website
      role
      location
      technologies
      started
      finished
    }
    repos {
      name
      url
      description
      language
      owner
    }
  }
`;

export const graphQLConfig = {
  PLAYGROUND_URL,
  DEFAULT_QUERY,
};

export default config;
