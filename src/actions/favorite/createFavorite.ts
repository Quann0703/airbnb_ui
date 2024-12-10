'use server';

import { sendRequest } from '@/utils/api';
import { getSession } from '../getCurrentUser';

interface createFavoriteProp {
    user?: string;
    property?: string;
}
export const createFavorite = async (data: createFavoriteProp) => {
    try {
        const session = await getSession();

        if (!session || !session.user.access_token) {
            console.log('User is not authenticated');
            return null;
        }

        const favorite = await sendRequest<IBackendRes<any>>({
            method: 'POST',
            url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/favorites`,
            headers: {
                Authorization: `Bearer ${session.user.access_token}`,
            },
            body: { ...data },
        });

        if (favorite.statusCode !== 200) {
            return null;
        }

        return favorite.data;
    } catch (error) {
        console.error(error);
    }
};
