import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!; // add in .env

export const signToken = (payload: object, expiresIn = "1h") => {
    // @ts-ignore
    return jwt.sign(payload, JWT_SECRET, { expiresIn });
};

export const verifyToken = (token: string) => {
    return jwt.verify(token, JWT_SECRET);
};


