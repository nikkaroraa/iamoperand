const name = () => (
  'Nikhil Arora'
);

const about = () => (
  'I write code. As simple as that. To be more specific, I am a full-stack engineer. One of the android-apps that I have built, has crossed over 1000 downloads on PlayStore. Currently, my tech-stack includes the likes of React, GraphQL, Node, Mongo and their derivatives.'
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

const angellist = () => (
  'https://angel.co/iamoperand'
);

const twitter = () => (
  'https://twitter.com/iamoperand'
);

const stackoverflow = () => (
  'https://stackoverflow.com/users/5733330/nikhil-arora'
);

const skills = () => (
  [
    'React',
    'Redux',
    'Gatsby',
    'Node',
    'Express',
    'Mongo',
    'Adonis JS',
    'Apollo GraphQL',
    'Prisma ORM',
    'Sequelize ORM',
    'MySQL',
    'PHP',
    'Laravel',
    'Firebase',
    'jQuery',
    'Git',
    'Test Driven Development',
    'Jest',
    'Travis CI',
    'Webpack',
    'ESLint',
    'Gulp',
  ]
);

const projects = () => (
  [
    {
      name: 'Everyday Education',
      description: 'We all learn something new, every other day. Why not document it?',
      technologies: [
        'React',
        'Apollo GraphQL',
        'Express JS',
        'Prisma ORM',
      ],
      github: 'https://github.com/iamoperand/everyday-education-frontend',
      website: 'https://everyday-education.netlify.com',
    },
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
      github: 'https://github.com/atpesto/hackernews-frontend',
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
  ]
);


const jobs = () => (
  [
    {
      company: 'Pesto',
      website: 'https://pesto.tech/',
      role: 'Full Stack Engineer',
      location: 'New Delhi, India',
      technologies: [
        'React',
        'Redux',
        'Apollo GraphQL',
        'Golang',
        'Node JS',
        'Prisma ORM',
        'Mongo',
        'TDD',
        'Jest',
        'CI/CD',
        'ESLint',
      ],
      started: 'June, 2018',
      finished: 'Currently Working',
    },
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
      name: 'Create-React-App Boilerplate',
      url: 'https://github.com/boilerplate-apps/create-react-app-boilerplate',
      description: 'Boilerplate for Create-React-App Util',
      language: 'JavaScript',
      owner: 'iamoperand',
    },
    {
      name: 'Express Boilerplate',
      url: 'https://github.com/boilerplate-apps/express-boilerplate',
      description: 'Boilerplate for Express Apps',
      language: 'JavaScript',
      owner: 'iamoperand',
    },
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
  about,
  email,
  age,
  github,
  medium,
  angellist,
  twitter,
  stackoverflow,
  skills,
  projects,
  jobs,
  repos,
};
