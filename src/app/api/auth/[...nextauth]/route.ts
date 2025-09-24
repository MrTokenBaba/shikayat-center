import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connect from "@lib/db";
import User from "@lib/modals/user";
import bcrypt from "bcryptjs";

import Github from "next-auth/providers/github";

export const authOptions  = NextAuth({
    session: { strategy: "jwt" },
    providers: [

       /* Github({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),*/
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: {},
                password:{},
            },
            async authorize(credentials) {
                try {
                    await connect();
                    const user = await User.findOne({ email: credentials?.email });

                    if (!user) return null;
                    const isValidPassword = await bcrypt.compare(
                        credentials?.password ?? "",
                        user.password as string
                    );
                    if (!isValidPassword) return null;

                    return {
                        id: user._id.toString(),
                        email: user.email,
                        name: user.name
                    };
                } catch {
                    return null;
                }
            }
        })
    ],
    callbacks: {
        async signIn({ account, profile }) {
            if (account?.provider === "github") {
                await connect();
                const existingUser = await User.findOne({ email: profile?.email });
                if (!existingUser) {
                    await User.create({
                        name: profile?.name,
                        email: profile?.email,
                    })
                }
            }
            return true;
        },

        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.name = user.name;
            }
            return token;
        },

        async session({ session, token }) {
            if (token) {
                session.user = {    email: token.email,     name: token.name};
            }
            return session;
        }

    },
    pages: {
        signIn: "/signin",
    },
    secret: process.env.NEXTAUTH_SECRET
});

export { authOptions as GET, authOptions as POST };