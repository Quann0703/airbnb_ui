'use server';

import { sendRequest } from '@/utils/api';
import { getSession } from '../getCurrentUser';

export const capturePayment = async (orderId: any) => {
    try {
        const session = await getSession();
        console.log(orderId);

        if (!session || !session.user.access_token) {
            console.log('User is not authenticated');
            return null;
        }
        console.log(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/payments/paypal/capture/${orderId}`);

        const res = await sendRequest<IBackendRes<any>>({
            method: 'POST',
            url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/payments/paypal/capture/${orderId}`,
            headers: {
                Authorization: `Bearer ${session.user.access_token}`,
            },
        });
        // Kiểm tra trạng thái phản hồi
        // if (res.statusCode !== 201) {
        //     console.log('Error creating payment');
        //     return null;
        // }
        return res.data;
    } catch (error) {
        console.error('Error creating payment:', error);
        return null;
    }
};
