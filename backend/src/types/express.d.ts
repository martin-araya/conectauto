import { Claims } from 'express-openid-connect';

declare namespace Express {
  interface Request {
    oidc?: {
      user?: Claims;
    };
  }

  interface User {
    id: string;
    username: string;
    email: string;
    roles: string[];
  }
}