const Repo = `
  type Repo {
    name: String!
    url: String!
    description: String!
    language: String!
    owner: String!
  }

  type Query {
    repos: [Repo!]
  }
`;


export default Repo;
