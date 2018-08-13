const name = () => (
  'Nikhil Arora'
);

const email = () => (
  'iamoperand.work@gmail.com'
);

const age = () => (
  21
);

const github = () => (
  'https://github.com/iamoperand'
);

const medium = () => (
  'https://medium.com/@iamoperand'
);

const twitter = () => (
  'https://twitter.com/iamoperand'
);

const stackoverflow = () => (
  'https://stackoverflow.com/users/5733330/nikhil-arora'
);

const projects = () => (
  [
    {
      name: 'The Remotants',
      description: 'Dashboard for Remote Workers: Aimed to solve the problem of work effort visibility in remote teams.',
      technologies: [
        'React',
        'Redux',
        'Express JS',
        'Mongo',
      ],
      github: 'https://github.com/PestoTech/project-the-remotants-frontend',
      website: 'https://the-remotants.netlify.com',
    },
    {
      name: 'Hackernews Clone',
      description: 'Made it while learning GraphQL',
      technologies: [
        'GraphQL',
        'Apollo',
        'React',
        'Express JS',
      ],
      github: 'https://github.com/Graph-QL/hackernews-client',
    },
    {
      name: 'Reduxstagram',
      description: 'Learnt Redux while making it!',
      technologies: [
        'React',
        'Redux',
      ],
      github: 'http://github.com/iamoperand/reduxstagram',
      website: 'https://iamoperand.github.io/reduxstagram/',
    },
    {
      name: 'Medicine Bazaa₹',
      description: 'Android e-commerce app for pharmaceuticals',
      technologies: [
        'Ionic 2',
        'Cordova',
        'TypeScript',
        'Firebase',
      ],
      github: 'https://github.com/iamoperand/medicineBazaarAndroid',
      website: 'https://bit.ly/medicinebazaar',
    },
    {
      name: 'Event Project',
      description: 'An event management system',
      technologies: [
        'Express JS',
        'Sequelize JS',
        'Passport JS',
      ],
      github: 'https://github.com/iamoperand/EventProject',
    },
    {
      name: 'Token System',
      description: 'Built a token system for Avionic Solutions (B2X)',
      technologies: [
        'Laravel',
        'Gulp',
        'Bootstrap',
      ],
      github: 'https://github.com/iamoperand/genIThubB2X/blob/master/package.json',
    },
  ]
);


const jobs = () => (
  [
    {
      company: 'MapleGraph Solutions',
      website: 'https://maplegraph.com/',
      role: 'Full Stack Engineer',
      location: 'Noida, India',
      technologies: [
        'Adonis JS',
        'Node JS',
        'MySQL',
        'Laravel',
      ],
      started: 'September, 2017',
      finished: 'May, 2018',
    },
    {
      company: 'Nagarro',
      website: 'https://www.nagarro.com/en',
      role: 'Trainee',
      location: 'Gurugram, India',
      technologies: [
        'React',
        'Node JS',
        'Sequelize JS',
        'Passport JS',
        'MySQL',
      ],
      started: 'June, 2017',
      finished: 'July, 2017',
    },
  ]
);

const repos = () => (
  [
    {
      name: 'Interview Preparation',
      url: 'https://github.com/atpesto/interview-prep',
      description: 'Set of questions that are focused towards preparing you for the interview',
      language: 'JavaScript',
      owner: 'iamoperand',
    },
  ]
);


export default {
  name,
  email,
  age,
  github,
  medium,
  twitter,
  stackoverflow,
  projects,
  jobs,
  repos,
};
