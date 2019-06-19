import * as jwt from 'jsonwebtoken';
import { Prisma, User } from './generated/prisma-client';
import algoliasearch = require('algoliasearch');
import { string } from 'yup';

export interface Context {
  prisma: Prisma;
  token?: String;
  user?: User;
  algolia: algoliasearch.Client;
  request: any;
  response: any;
}

export function getUserId(ctx: Context) {
  if (ctx.request.cookies.token) {
    const { userId } = jwt.verify(
      ctx.request.cookies.token,
      process.env.APP_SECRET
    ) as {
      userId: string;
    };
    return userId;
  }
  const Authorization = ctx.request.get('Authorization');
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
  tags = [...tags];

  return {
    title: job.title,
    company: job.company,
    updated_at: new Date(job.updatedAt).getTime(),
    objectID: job.id,
    url: job.url,
    shortDescription: job.shortDescription,
    slug: job.slug,
    categories,
    techs: tags,
    _tags: [...tags, ...categories],
    _geoloc: {
      lat: job.city.lat,
      lng: job.city.lng,
    },
    city: job.city.name,
  };
}

export function makeShortDescription(htmlDescription: string): string {
  const stripedHtml = htmlDescription.replace(/<[^>]+>/g, '');

  return stripedHtml.substring(0, 200) + '...';
}

export function createToken(id: string) {
  return jwt.sign({ userId: id }, process.env.APP_SECRET);
}
