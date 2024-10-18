'use server';

import { sendRequest } from '@/utils/api';
import { getSession } from '../getCurrentUser';

export const handleReturn = async (token: any, payerID: any) => {
    try {
        const session = await getSession();

        if (!session || !session.user.access_token) {
            console.log('User is not authenticated');
            return null;
        }

        const res = await sendRequest<IBackendRes<any>>({
            method: 'GET',
            url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/payments/return`,
            headers: {
                Authorization: `Bearer ${session.user.access_token}`,
            },
            queryParams: {
                token: token,
                PayerID: payerID,
            },
        });
        if (res.statusCode !== 200) {
            console.error('không thấy phản hồi về', res);
            return null;
        }
        return res.data;
    } catch (error) {
        console.error('Error return payment:', error);
        return null;
    }
};
