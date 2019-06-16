import slugify from 'slugify';
import { Context, transform, makeShortDescription } from '../../utils';
import console = require('console');

async function getSlug(
  slug: string,
  ctx: Context,
  counter: number,
  length: number
) {
  const job = await ctx.prisma.job({ slug });
  if (!job) {
    return slug;
  }
  return getSlug(
    slugify(slug.substring(0, length) + counter.toString()),
    ctx,
    counter + 1,
    length
  );
}

export default {
  async createJob(parent, { input }, ctx: Context) {
    const initialSlug = slugify(input.title.toLowerCase());
    const slug = await getSlug(initialSlug, ctx, 0, initialSlug.length);
    try {
      const job = await ctx.prisma.createJob({
        ...input,
        creator: {
          connect: {
            id: ctx.user.id,
          },
        },
        city: {
          connect: {
            name: input.city,
          },
        },
        categories: {
          connect: input.categories.map(c => ({ id: c })),
        },
        tags: {
          connect: input.tags!.map(c => ({ name: c })),
        },
        slug,
        shortDescription: makeShortDescription(input.description),
        published_at: ctx.user.permission === 'ADMIN' ? new Date() : null,
        status: ctx.user.permission === 'ADMIN' ? 'APPROVED' : 'PENDING',
      });
      return job;
    } catch (e) {
      console.log(e);
      throw new Error('Error trying to create job!');
    }
  },
  updateJob: async (parent, { id, input }, ctx: Context) => {
    const job = await ctx.prisma.updateJob({
      data: {
        ...input,
        city: {
          connect: {
            name: input.city,
          },
        },
        categories: {
          connect: input.categories.map(c => ({ id: c })),
        },
        tags: {
          connect: input.tags!.map(c => ({ name: c })),
        },
        shortDescription: makeShortDescription(input.description),
        status: ctx.user.permission === 'ADMIN' ? 'APPROVED' : 'PENDING',
      },
      where: { id },
    });

    return job;
  },
  deleteJob: async (parent, { id }, ctx: Context) => {
    await ctx.prisma.updateJob({
      data: {
        status: 'REMOVED',
      },
      where: { id },
    });

    return 'Job removed';
  },
  async publish(parent, { id }, ctx: Context) {
    try {
      const fragment = `
        fragment JobWithCityTagsCategories on Job {
          id
          title
          updatedAt
          url
          description
          slug
          shortDescription
          city {
            name
            lat
            lng
          }
          categories {
            name
          }
          tags {
            name
          }
        }
      `;
      const job = await ctx.prisma
        .updateJob({
          data: {
            published_at: new Date(),
            status: 'APPROVED',
          },
          where: {
            id,
          },
        })
        .$fragment(fragment);

      const client = ctx.algolia.initIndex('jobs_index');
      client.saveObject(transform(job));
      return 'Job published!';
    } catch (e) {
      throw new Error('Job ID doesnt exist!');
    }
  },
  async unpublish(parent, { id }, ctx: Context) {
    try {
      const job = await ctx.prisma.updateJob({
        data: {
          published_at: null,
          status: 'REMOVED',
        },
        where: {
          id,
        },
      });

      const client = ctx.algolia.initIndex('jobs_index');
      client.deleteObject(id);

      return job;
    } catch (e) {
      throw new Error('Job ID doesnt exist!');
    }
  },
};
