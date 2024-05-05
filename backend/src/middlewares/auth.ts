import passport from 'passport';
import { Strategy as Auth0Strategy } from 'passport-auth0';

const auth0Strategy = new Auth0Strategy(
  {
    domain: process.env.AUTH0_DOMAIN || '',
    clientID: process.env.AUTH0_CLIENT_ID || '',
    clientSecret: process.env.AUTH0_CLIENT_SECRET || '',
    callbackURL: process.env.AUTH0_CALLBACK_URL || '',
  },
  (accessToken, refreshToken, extraParams, profile, done) => {
    const user = {
      id: profile.id,
      username: profile.displayName,
      email: profile.emails?.[0]?.value || '',
      roles: ['admin'], // Puedes ajustar los roles aquí
    };

    return done(null, user);
  }
);

passport.use(auth0Strategy);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user as Express.User);
});

export default passport;