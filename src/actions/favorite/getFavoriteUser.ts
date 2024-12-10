'use server';

import { sendRequest } from '@/utils/api';
import { getSession } from '../getCurrentUser';

export const getFavoriteUser = async (data: any) => {
    try {
        const session = await getSession();

        if (!session || !session.user.access_token) {
            console.log('User is not authenticated');
            return null;
        }

        const favorite = await sendRequest<IBackendRes<any>>({
            method: 'GET',
            url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/favorites`,
            headers: {
                Authorization: `Bearer ${session.user.access_token}`,
            },
            queryParams: { ...data },
        });

        if (favorite.statusCode !== 200) {
            return null;
        }

        return favorite.data;
    } catch (error) {
        console.error(error);
    }
};
