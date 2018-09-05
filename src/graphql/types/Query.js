const Query = `
  type Query {
    name: String!
    about: String!
    email: String!
    age: Int!
    github: String!
    medium: String!
    angellist: String!
    twitter: String!
    stackoverflow: String!
    skills: [String!]
  }
`;


export default Query;
