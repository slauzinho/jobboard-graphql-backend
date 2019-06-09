import { Query } from './Query';
import { auth } from './Mutation/auth';
import publish from './Mutation/publish';
import job from './Mutation/job';
import { Job } from './Job';
import { Category } from './Category';
import { Tag } from './Tag';
import { User } from './User';
import { City } from './City';
import { AuthPayload } from './AuthPayload';
import { MutationResolvers, Resolvers } from '../generated/graphqlgen';

const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,
  ...auth,
  ...publish,
  ...job,
};

const resolvers: Resolvers = {
  Query,
  Mutation,
  Job,
  Category,
  Tag,
  User,
  City,
  AuthPayload,
};

export default resolvers;
