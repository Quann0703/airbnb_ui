'use server';

import { auth, signIn } from '@/auth';

export async function authenticate(email: string, password: string) {
    try {
        const r = await signIn('credentials', {
            username: email,
            password: password,
            // callbackUrl: "/",
            redirect: false,
        });
        return r;
    } catch (error) {
        if ((error as any).name === 'InvalidEmailPasswordError') {
            return {
                error: (error as any).type,
                code: 1,
            };
        } else if ((error as any).name === 'InactiveAccountError') {
            return {
                error: (error as any).type,
                code: 2,
            };
        } else {
            return {
                error: 'Internal serve error',
                code: 0,
            };
        }
    }
}
export async function authenticateGoogle() {
    // try {
    const r = await signIn('google');
    return r;
    // } catch (error) {
    //     return {
    //         error: 'Internal serve error',
    //         code: 0,
    //     };
    // }
}
