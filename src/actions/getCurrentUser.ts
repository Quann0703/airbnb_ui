'use server';

import { auth } from '@/auth';
import { sendRequest } from '@/utils/api';

export async function getSession() {
    const session = await auth();
    return session;
}

export async function getCurrentUser() {
    try {
        const session = await getSession();
        if (!session?.user?.email) {
            return null;
        }
        const res = await sendRequest<IBackendRes<any>>({
            method: 'GET',
            url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/currentUser`,
            headers: {
                Authorization: `Bearer ${session?.user?.access_token}`,
            },
            queryParams: {
                email: session?.user?.email,
            },
        });
        if (!res) {
            return null;
        }
        return {
            ...res?.data?.user,
        };
    } catch (error) {}
}
