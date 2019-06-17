// Code generated by github.com/prisma/graphqlgen, DO NOT EDIT.

import { GraphQLResolveInfo } from "graphql";
import { User, Job, City, Category, Tag } from "./prisma-client";
import { AuthPayload } from "./prisma-client/custom-types";
import { Context } from "../utils";

export namespace QueryResolvers {
  export const defaultResolvers = {};

  export type MeResolver =
    | ((
        parent: undefined,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => User | null | Promise<User | null>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => User | null | Promise<User | null>;
      };

  export type JobsResolver =
    | ((
        parent: undefined,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Array<Job | null> | Promise<Array<Job | null>>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Array<Job | null> | Promise<Array<Job | null>>;
      };

  export type PendingResolver =
    | ((
        parent: undefined,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Array<Job | null> | Promise<Array<Job | null>>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Array<Job | null> | Promise<Array<Job | null>>;
      };

  export type CategoriesResolver =
    | ((
        parent: undefined,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Array<Category | null> | Promise<Array<Category | null>>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Array<Category | null> | Promise<Array<Category | null>>;
      };

  export type TagsResolver =
    | ((
        parent: undefined,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Array<Tag | null> | Promise<Array<Tag | null>>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Array<Tag | null> | Promise<Array<Tag | null>>;
      };

  export type CitiesResolver =
    | ((
        parent: undefined,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Array<City | null> | Promise<Array<City | null>>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Array<City | null> | Promise<Array<City | null>>;
      };

  export interface Type {
    me:
      | ((
          parent: undefined,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => User | null | Promise<User | null>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => User | null | Promise<User | null>;
        };

    jobs:
      | ((
          parent: undefined,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Array<Job | null> | Promise<Array<Job | null>>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Array<Job | null> | Promise<Array<Job | null>>;
        };

    pending:
      | ((
          parent: undefined,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Array<Job | null> | Promise<Array<Job | null>>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Array<Job | null> | Promise<Array<Job | null>>;
        };

    categories:
      | ((
          parent: undefined,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Array<Category | null> | Promise<Array<Category | null>>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Array<Category | null> | Promise<Array<Category | null>>;
        };

    tags:
      | ((
          parent: undefined,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Array<Tag | null> | Promise<Array<Tag | null>>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Array<Tag | null> | Promise<Array<Tag | null>>;
        };

    cities:
      | ((
          parent: undefined,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Array<City | null> | Promise<Array<City | null>>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Array<City | null> | Promise<Array<City | null>>;
        };
  }
}

export namespace UserResolvers {
  export const defaultResolvers = {
    id: (parent: User) => parent.id,
    email: (parent: User) => parent.email
  };

  export type IdResolver =
    | ((
        parent: User,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type EmailResolver =
    | ((
        parent: User,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type JobsResolver =
    | ((
        parent: User,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Job[] | Promise<Job[]>)
    | {
        fragment: string;
        resolve: (
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Job[] | Promise<Job[]>;
      };

  export interface Type {
    id:
      | ((
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: User,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    email:
      | ((
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: User,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    jobs:
      | ((
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Job[] | Promise<Job[]>)
      | {
          fragment: string;
          resolve: (
            parent: User,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Job[] | Promise<Job[]>;
        };
  }
}

export namespace JobResolvers {
  export const defaultResolvers = {
    id: (parent: Job) => parent.id,
    title: (parent: Job) => parent.title,
    url: (parent: Job) => (parent.url === undefined ? null : parent.url),
    company: (parent: Job) => parent.company,
    description: (parent: Job) => parent.description,
    slug: (parent: Job) => parent.slug,
    published_at: (parent: Job) =>
      parent.published_at === undefined ? null : parent.published_at,
    status: (parent: Job) => parent.status,
    shortDescription: (parent: Job) => parent.shortDescription
  };

  export type IdResolver =
    | ((
        parent: Job,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Job,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type SlugResolver =
    | ((
        parent: Job,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Job,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type TitleResolver =
    | ((
        parent: Job,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Job,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type UrlResolver =
    | ((
        parent: Job,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | null | Promise<string | null>)
    | {
        fragment: string;
        resolve: (
          parent: Job,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>;
      };

  export type CompanyResolver =
    | ((
        parent: Job,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Job,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type DescriptionResolver =
    | ((
        parent: Job,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Job,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type CityResolver =
    | ((
        parent: Job,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => City | Promise<City>)
    | {
        fragment: string;
        resolve: (
          parent: Job,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => City | Promise<City>;
      };

  export type Published_atResolver =
    | ((
        parent: Job,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | null | Promise<string | null>)
    | {
        fragment: string;
        resolve: (
          parent: Job,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>;
      };

  export type CategoriesResolver =
    | ((
        parent: Job,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Category[] | Promise<Category[]>)
    | {
        fragment: string;
        resolve: (
          parent: Job,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Category[] | Promise<Category[]>;
      };

  export type TagsResolver =
    | ((
        parent: Job,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Array<Tag | null> | Promise<Array<Tag | null>>)
    | {
        fragment: string;
        resolve: (
          parent: Job,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Array<Tag | null> | Promise<Array<Tag | null>>;
      };

  export type StatusResolver =
    | ((
        parent: Job,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Job,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type ShortDescriptionResolver =
    | ((
        parent: Job,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Job,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export interface Type {
    id:
      | ((
          parent: Job,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Job,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    slug:
      | ((
          parent: Job,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Job,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    title:
      | ((
          parent: Job,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Job,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    url:
      | ((
          parent: Job,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>)
      | {
          fragment: string;
          resolve: (
            parent: Job,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | null | Promise<string | null>;
        };

    company:
      | ((
          parent: Job,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Job,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    description:
      | ((
          parent: Job,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Job,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    city:
      | ((
          parent: Job,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => City | Promise<City>)
      | {
          fragment: string;
          resolve: (
            parent: Job,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => City | Promise<City>;
        };

    published_at:
      | ((
          parent: Job,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>)
      | {
          fragment: string;
          resolve: (
            parent: Job,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | null | Promise<string | null>;
        };

    categories:
      | ((
          parent: Job,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Category[] | Promise<Category[]>)
      | {
          fragment: string;
          resolve: (
            parent: Job,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Category[] | Promise<Category[]>;
        };

    tags:
      | ((
          parent: Job,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Array<Tag | null> | Promise<Array<Tag | null>>)
      | {
          fragment: string;
          resolve: (
            parent: Job,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Array<Tag | null> | Promise<Array<Tag | null>>;
        };

    status:
      | ((
          parent: Job,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Job,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    shortDescription:
      | ((
          parent: Job,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Job,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };
  }
}

export namespace CityResolvers {
  export const defaultResolvers = {
    id: (parent: City) => parent.id,
    lat: (parent: City) => parent.lat,
    lng: (parent: City) => parent.lng,
    name: (parent: City) => parent.name,
    district: (parent: City) => parent.district
  };

  export type IdResolver =
    | ((
        parent: City,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: City,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type LatResolver =
    | ((
        parent: City,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => number | Promise<number>)
    | {
        fragment: string;
        resolve: (
          parent: City,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => number | Promise<number>;
      };

  export type LngResolver =
    | ((
        parent: City,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => number | Promise<number>)
    | {
        fragment: string;
        resolve: (
          parent: City,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => number | Promise<number>;
      };

  export type NameResolver =
    | ((
        parent: City,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: City,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type DistrictResolver =
    | ((
        parent: City,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: City,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export interface Type {
    id:
      | ((
          parent: City,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: City,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    lat:
      | ((
          parent: City,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => number | Promise<number>)
      | {
          fragment: string;
          resolve: (
            parent: City,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => number | Promise<number>;
        };

    lng:
      | ((
          parent: City,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => number | Promise<number>)
      | {
          fragment: string;
          resolve: (
            parent: City,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => number | Promise<number>;
        };

    name:
      | ((
          parent: City,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: City,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    district:
      | ((
          parent: City,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: City,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };
  }
}

export namespace CategoryResolvers {
  export const defaultResolvers = {
    id: (parent: Category) => parent.id,
    name: (parent: Category) => parent.name
  };

  export type IdResolver =
    | ((
        parent: Category,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Category,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type NameResolver =
    | ((
        parent: Category,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Category,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type JobsResolver =
    | ((
        parent: Category,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Array<Job | null> | Promise<Array<Job | null>>)
    | {
        fragment: string;
        resolve: (
          parent: Category,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Array<Job | null> | Promise<Array<Job | null>>;
      };

  export interface Type {
    id:
      | ((
          parent: Category,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Category,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    name:
      | ((
          parent: Category,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Category,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    jobs:
      | ((
          parent: Category,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Array<Job | null> | Promise<Array<Job | null>>)
      | {
          fragment: string;
          resolve: (
            parent: Category,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Array<Job | null> | Promise<Array<Job | null>>;
        };
  }
}

export namespace TagResolvers {
  export const defaultResolvers = {
    id: (parent: Tag) => parent.id,
    name: (parent: Tag) => parent.name
  };

  export type IdResolver =
    | ((
        parent: Tag,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Tag,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type NameResolver =
    | ((
        parent: Tag,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Tag,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type JobsResolver =
    | ((
        parent: Tag,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Array<Job | null> | Promise<Array<Job | null>>)
    | {
        fragment: string;
        resolve: (
          parent: Tag,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Array<Job | null> | Promise<Array<Job | null>>;
      };

  export interface Type {
    id:
      | ((
          parent: Tag,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Tag,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    name:
      | ((
          parent: Tag,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Tag,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    jobs:
      | ((
          parent: Tag,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Array<Job | null> | Promise<Array<Job | null>>)
      | {
          fragment: string;
          resolve: (
            parent: Tag,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Array<Job | null> | Promise<Array<Job | null>>;
        };
  }
}

export namespace MutationResolvers {
  export const defaultResolvers = {};

  export interface JobCreateInput {
    title: string;
    url?: string | null;
    company: string;
    description: string;
    city: string;
    categories: string[];
    tags: Array<string | null>;
  }
  export interface ResetPasswordInput {
    resetToken: string;
    password: string;
    repeatPassword: string;
  }
  export interface jobUpdateInput {
    url?: string | null;
    description: string;
    city: string;
    categories: string[];
    tags: Array<string | null>;
  }

  export interface ArgsSignup {
    email: string;
    password: string;
  }

  export interface ArgsLogin {
    email: string;
    password: string;
  }

  export interface ArgsPublish {
    id: string;
  }

  export interface ArgsUnpublish {
    id: string;
  }

  export interface ArgsCreateJob {
    input?: JobCreateInput | null;
  }

  export interface ArgsForgotPassword {
    email: string;
  }

  export interface ArgsResetPassword {
    input?: ResetPasswordInput | null;
  }

  export interface ArgsUpdateJob {
    id: string;
    input: jobUpdateInput;
  }

  export interface ArgsDeleteJob {
    id: string;
  }

  export type SignupResolver =
    | ((
        parent: undefined,
        args: ArgsSignup,
        ctx: Context,
        info: GraphQLResolveInfo
      ) => AuthPayload | Promise<AuthPayload>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsSignup,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => AuthPayload | Promise<AuthPayload>;
      };

  export type LoginResolver =
    | ((
        parent: undefined,
        args: ArgsLogin,
        ctx: Context,
        info: GraphQLResolveInfo
      ) => AuthPayload | Promise<AuthPayload>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsLogin,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => AuthPayload | Promise<AuthPayload>;
      };

  export type LogoutResolver =
    | ((
        parent: undefined,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => boolean | Promise<boolean>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => boolean | Promise<boolean>;
      };

  export type PublishResolver =
    | ((
        parent: undefined,
        args: ArgsPublish,
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsPublish,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type UnpublishResolver =
    | ((
        parent: undefined,
        args: ArgsUnpublish,
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Job | Promise<Job>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsUnpublish,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Job | Promise<Job>;
      };

  export type CreateJobResolver =
    | ((
        parent: undefined,
        args: ArgsCreateJob,
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Job | Promise<Job>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsCreateJob,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Job | Promise<Job>;
      };

  export type ForgotPasswordResolver =
    | ((
        parent: undefined,
        args: ArgsForgotPassword,
        ctx: Context,
        info: GraphQLResolveInfo
      ) => boolean | Promise<boolean>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsForgotPassword,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => boolean | Promise<boolean>;
      };

  export type ResetPasswordResolver =
    | ((
        parent: undefined,
        args: ArgsResetPassword,
        ctx: Context,
        info: GraphQLResolveInfo
      ) => AuthPayload | Promise<AuthPayload>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsResetPassword,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => AuthPayload | Promise<AuthPayload>;
      };

  export type UpdateJobResolver =
    | ((
        parent: undefined,
        args: ArgsUpdateJob,
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Job | Promise<Job>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsUpdateJob,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Job | Promise<Job>;
      };

  export type DeleteJobResolver =
    | ((
        parent: undefined,
        args: ArgsDeleteJob,
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsDeleteJob,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export interface Type {
    signup:
      | ((
          parent: undefined,
          args: ArgsSignup,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => AuthPayload | Promise<AuthPayload>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsSignup,
            ctx: Context,
            info: GraphQLResolveInfo
          ) => AuthPayload | Promise<AuthPayload>;
        };

    login:
      | ((
          parent: undefined,
          args: ArgsLogin,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => AuthPayload | Promise<AuthPayload>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsLogin,
            ctx: Context,
            info: GraphQLResolveInfo
          ) => AuthPayload | Promise<AuthPayload>;
        };

    logout:
      | ((
          parent: undefined,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => boolean | Promise<boolean>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => boolean | Promise<boolean>;
        };

    publish:
      | ((
          parent: undefined,
          args: ArgsPublish,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsPublish,
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    unpublish:
      | ((
          parent: undefined,
          args: ArgsUnpublish,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Job | Promise<Job>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsUnpublish,
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Job | Promise<Job>;
        };

    createJob:
      | ((
          parent: undefined,
          args: ArgsCreateJob,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Job | Promise<Job>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsCreateJob,
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Job | Promise<Job>;
        };

    forgotPassword:
      | ((
          parent: undefined,
          args: ArgsForgotPassword,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => boolean | Promise<boolean>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsForgotPassword,
            ctx: Context,
            info: GraphQLResolveInfo
          ) => boolean | Promise<boolean>;
        };

    resetPassword:
      | ((
          parent: undefined,
          args: ArgsResetPassword,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => AuthPayload | Promise<AuthPayload>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsResetPassword,
            ctx: Context,
            info: GraphQLResolveInfo
          ) => AuthPayload | Promise<AuthPayload>;
        };

    updateJob:
      | ((
          parent: undefined,
          args: ArgsUpdateJob,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Job | Promise<Job>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsUpdateJob,
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Job | Promise<Job>;
        };

    deleteJob:
      | ((
          parent: undefined,
          args: ArgsDeleteJob,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsDeleteJob,
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };
  }
}

export namespace AuthPayloadResolvers {
  export const defaultResolvers = {
    user: (parent: AuthPayload) => parent.user,
    token: (parent: AuthPayload) => parent.token
  };

  export type TokenResolver =
    | ((
        parent: AuthPayload,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: AuthPayload,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type UserResolver =
    | ((
        parent: AuthPayload,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => User | Promise<User>)
    | {
        fragment: string;
        resolve: (
          parent: AuthPayload,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => User | Promise<User>;
      };

  export interface Type {
    token:
      | ((
          parent: AuthPayload,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: AuthPayload,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    user:
      | ((
          parent: AuthPayload,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => User | Promise<User>)
      | {
          fragment: string;
          resolve: (
            parent: AuthPayload,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => User | Promise<User>;
        };
  }
}

export interface Resolvers {
  Query: QueryResolvers.Type;
  User: UserResolvers.Type;
  Job: JobResolvers.Type;
  City: CityResolvers.Type;
  Category: CategoryResolvers.Type;
  Tag: TagResolvers.Type;
  Mutation: MutationResolvers.Type;
  AuthPayload: AuthPayloadResolvers.Type;
}

// @ts-ignore
declare module "graphql-tools" {
  interface IResolvers extends Resolvers {}
}
