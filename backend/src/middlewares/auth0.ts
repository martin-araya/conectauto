import { auth } from 'express-openid-connect';

export const auth0 = auth({
  authRequired: false,
  auth0Logout: true,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL!,
  baseURL: process.env.BASE_URL!,
  clientID: process.env.AUTH0_CLIENT_ID!,
  secret: process.env.SESSION_SECRET!,
});