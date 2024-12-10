'use server';

import { sendRequest } from '@/utils/api';
import { getSession } from '../getCurrentUser';

export const cancelReservation = async (id: string) => {
    try {
        const session = await getSession();

        if (!session || !session.user.access_token) {
            console.log('User is not authenticated');
            return null;
        }

        const reservation = await sendRequest<IBackendRes<any>>({
            method: 'DELETE',
            url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/reservations/${id}`,
            headers: {
                Authorization: `Bearer ${session.user.access_token}`,
            },
        });

        if (reservation.statusCode !== 200) {
            return null;
        }

        return reservation.data;
    } catch (error) {
        console.error(error);
    }
};
