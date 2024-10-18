'use server';

import { sendRequest } from '@/utils/api';
import { getSession } from '../getCurrentUser';

export const createReservation = async (data: any) => {
    try {
        const session = await getSession();

        // Check if the session exists and user is authenticated
        if (!session || !session.user.access_token) {
            console.log('User is not authenticated');
            return null;
        }
        const res = await sendRequest<IBackendRes<any>>({
            method: 'POST',
            url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/reservations`,
            headers: {
                Authorization: `Bearer ${session.user.access_token}`,
            },
            body: { ...data },
        });

        console.log(res);
        if (res.statusCode !== 200) {
            console.log('Error creating reservation');
            return null;
        }

        return res.data;
    } catch (error) {
        console.error(error);
    }
};
