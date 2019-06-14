import * as jwt from 'jsonwebtoken';
import { Prisma, User } from './generated/prisma-client';
import algoliasearch = require('algoliasearch');
import console = require('console');

export interface Context {
  prisma: Prisma;
  token?: String;
  user?: User;
  algolia: algoliasearch.Client;
  request: any;
  response: any;
}

export function getUserId(ctx: Context) {
  const Authorization = ctx.request.get('Authorization');
  /* if (ctx.request.cookies.token) {
    const { userId } = jwt.verify(
      ctx.request.cookies.token,
      process.env.APP_SECRET
    ) as {
      userId: string;
    };
    return userId;
  } */
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    const { userId } = jwt.verify(token, process.env.APP_SECRET) as {
      userId: string;
    };
    return userId;
  }

  throw new AuthError();
}

export class AuthError extends Error {
  constructor() {
    super('Not authorized');
  }
}

// Serialize job payload for it to be saved on algolia.
export function transform(job: any) {
  let tags = [];
  if (job.tags) {
    tags = job.tags.map(tag => tag.name);
  }
  const categories = job.categories.map(cat => cat.name);
  tags = [...tags, ...categories];

  return {
    title: job.title,
    company: job.company,
    updated_at: new Date(job.updatedAt).getTime(),
    objectID: job.id,
    url: job.url.length > 0 ? job.url : null,
    description: job.description,
    slug: job.slug,
    _tags: tags,
    _geoloc: {
      lat: job.city.lat,
      lng: job.city.lng,
    },
    city: job.city.name,
  };
}

export function makeShortDescription(htmlDescription: string): string {
  const stripedHtml = htmlDescription.replace(/<[^>]+>/g, '');

  return stripedHtml.substring(0, 100) + '...';
}
