import { GraphQLServer } from 'graphql-yoga';
import { prisma } from './generated/prisma-client';
import resolvers from './resolvers';
import permissions from './permissions';
import algoliasearch = require('algoliasearch');
import * as cookieParser from 'cookie-parser';
import * as passport from 'passport';
import github from './strategies/github';
import console = require('console');
import { createToken } from './utils';

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  middlewares: [permissions],
  context: request => ({
    ...request,
    prisma,
    algolia: algoliasearch(
      process.env.ALGOLIA_APP_ID,
      process.env.ALGOLIA_API_KEY
    ),
  }),
});

passport.use(github);
server.express.use(cookieParser());
server.express.get('/auth/connect/github', passport.authenticate('github'));
server.express.get(
  '/auth/github/callback',
  passport.authenticate('github', { session: false }),
  function(req, res) {
    // on the success callback generate an auth token
    const token = createToken(req.user.id);
    res.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24, // 1 month
    });

    res.redirect('/');
  }
);
server.express.use('*', (req, res, next) => {
  const query = req.query || req.body.query || '';
  if (query.length > 2000) {
    throw new Error('Query to long');
  }
  next();
});

const options = {
  cors: {
    credentials: true,
    origin: 'http://localhost:3000',
  },
};

server.start(options, () =>
  console.log(`Server is running on http://localhost:4000`)
);
