import { mergeTypes } from 'merge-graphql-schemas';

import Query from './Query';
import Job from './Job';
import Project from './Project';
import Repo from './Repo';


const types = [
  Query,
  Job,
  Project,
  Repo,
];

export default mergeTypes(types);
