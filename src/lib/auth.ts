import {betterAuth} from 'better-auth';
import {nextCookies} from "better-auth/next-js";
import {Resend} from "resend";
import {Pool} from "pg";
import { MongoClient } from "mongodb";

import { mongodbAdapter } from "better-auth/adapters/mongodb";

import {github}  from "better-auth/social-providers";

const resend = new Resend(process.env.RESEND_API_KEY);
//const client = new MongoClient(process.env.MONGODB_URI);

//const db = client.db();

export const auth = betterAuth({
    database: new Pool({
        connectionString: process.env.MONGODB_URI
    }),
    emailAndPassword:{
        enabled: true,
        sendResetPassword: async ({token, user}) => {}
    },

    resetPasswordTokenExpiresIn: 3600,

    socialProviders:{
        github: {
            clientId:  process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!
        }
    },
    plugins : [nextCookies()]

})



