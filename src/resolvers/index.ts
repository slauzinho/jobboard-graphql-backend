import { Query } from './Query'
import { auth } from './Mutation/auth'
import publish from './Mutation/publish';
import job from './Mutation/job';
import { Job } from './Job'
import { Category } from './Category'
import { Tag } from './Tag'


export default {
  Query,
  Mutation: {
    ...auth,
    ...publish,
    ...job,
  },
  Job,
  Category,
  Tag,
}
