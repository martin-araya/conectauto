import { Request, Response, NextFunction } from 'express';
interface User extends Express.User {
    roles: string[];
}

export function isAdmin(req: Request, res: Response, next: NextFunction) {
    const user = req.user as User;

    if (user && user.roles && user.roles.includes('admin')) {
        return next();
    }

    return res.status(403).json({ message: 'Access denied: Admins only' });
}