import { Strategy } from 'passport-github';
import { prisma } from '../../generated/prisma-client';
import console = require('console');

export default new Strategy(
  {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: 'http://localhost:4000/auth/github/callback',
    passReqToCallback: true,
    scope: ['user:email'],
  },
  async (req, accessToken, refreshToken, params, profile, done) => {
    // find primary email address
    const primaryEmail = profile.emails.reduce((tail, email) => {
      if (email.primary === true) {
        return email.value;
      }
      return tail;
    }, undefined);

    let user = await prisma.user({ email: primaryEmail });
    // if the user doesnt have a githubID add it or if
    // the user doesnt exists create it
    if (!user || !user.githubID) {
      await prisma.upsertUser({
        where: { email: primaryEmail },
        update: {
          githubID: profile.id,
          avatarUrl: profile._json.avatarUrl,
        },
        create: {
          email: primaryEmail,
          githubID: profile.id,
          avatarUrl: profile._json.avatarUrl,
        },
      });
    }
    done(null, user);
  }
);
