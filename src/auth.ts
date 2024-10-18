import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';
import { InactiveAccountError, InvalidEmailPasswordError } from './utils/errors';
import { sendRequest } from './utils/api';
import { IUser } from './types/next-auth';

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            async profile(profile) {
                const userData = {
                    name: profile.name,
                    image: profile.picture,
                    email: profile.email,
                };

                // Gửi yêu cầu đến backend để nhận JWT
                const res = await sendRequest<IBackendRes<any>>({
                    method: 'POST',
                    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/google`,
                    body: userData,
                });

                return {
                    ...userData,
                    access_token: res.data.token, // Lưu JWT từ backend
                };
            },
        }),

        Credentials({
            credentials: {
                username: {},
                password: {},
            },
            authorize: async (credentials) => {
                console.log('>>> check credentials: ', credentials);

                const res = await sendRequest<IBackendRes<ILogin>>({
                    method: 'POST',
                    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/login`,
                    body: {
                        username: credentials.username,
                        password: credentials.password,
                    },
                });

                if (res.statusCode === 201) {
                    return {
                        _id: res.data?.user?._id,
                        name: res.data?.user?.name,
                        email: res.data?.user?.email,
                        access_token: res.data?.access_token,
                    };
                } else if (+res.statusCode === 401) {
                    throw new InvalidEmailPasswordError();
                } else if (+res.statusCode === 400) {
                    throw new InactiveAccountError();
                } else {
                    throw new Error('Internal serve error');
                }
            },
        }),
    ],
    pages: {
        signIn: '/home',
    },
    callbacks: {
        jwt({ token, user, account }) {
            if (account) {
                token.accessToken = account.access_token; // Lưu access_token
            }
            if (user) {
                token.user = user as IUser;
            }
            return token;
        },
        session({ session, token }) {
            (session.user as IUser) = token.user;
            session.access_token = token.accessToken as string;
            return session;
        },
        authorized: async ({ auth }) => {
            return !!auth;
        },
    },
});
