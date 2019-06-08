import slugify from 'slugify';
import { Context } from '../../utils';
import { Maybe, ID_Input } from '../../generated/prisma-client';
import console = require('console');

export interface JobCreateInput {
  title: string;
  url?: Maybe<string>;
  company: string;
  description: string;
  city: string;
  categories: string[];
  tags?: string[];
}

async function getSlug(slug: string, ctx: Context, counter: number, length: number) {
    const job = await ctx.prisma.job({slug})
    if(!job) {
        return slug;
    }
    return getSlug(slugify(slug.substring(0,length) + counter.toString()), ctx, counter + 1, length);
}

export default {
  async createJob(parent, {input}: {input: JobCreateInput}, ctx: Context) {
    const initialSlug = slugify(input.title.toLowerCase());
    const slug = await getSlug(initialSlug, ctx, 0, initialSlug.length);
    try {
      await ctx.prisma.createJob({
          ...input,
          creator: {
              connect: {
                  id: ctx.user.id
              }
          },
          city: {
              connect: {
                name: input.city
              }
          },
          categories: {
              connect: input.categories.map(c => ({id: c}))
          },
          tags: {
              connect: input.tags!.map(c => ({name: c}))
          },
          slug
      })
    } catch (e) {
      return new Error('Error creating job');
    }
    return true;
  },
};
