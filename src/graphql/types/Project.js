const Project = `
  type Project {
    name: String!
    description: String!
    technologies: [String!]
    github: String!
    website: String
  }

  type Query {
    projects: [Project!]
  }
`;


export default Project;
