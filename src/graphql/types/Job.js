const Job = `
  type Job {
    company: String!
    website: String!
    role: String!
    location: String!
    technologies: [String!]
    started: String
    finished: String
  }

  type Query {
    jobs: [Job!]
  }
`;


export default Job;
