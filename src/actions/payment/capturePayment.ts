'use server';

import { sendRequest } from '@/utils/api';
import { getSession } from '../getCurrentUser';
import { createReservation } from '../reservation/createReservation';

export const capturePayment = async (orderId: any, data: any) => {
    try {
        const session = await getSession();

        if (!session || !session.user.access_token) {
            console.log('User is not authenticated');
            return { error: 'User is not authenticated' };
        }

        console.log(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/payments/paypal/capture/${orderId}`);

        const res = await sendRequest<IBackendRes<any>>({
            method: 'POST',
            url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/payments/paypal/capture/${orderId}`,
            headers: {
                Authorization: `Bearer ${session.user.access_token}`,
            },
        });

        // Kiểm tra nếu trạng thái payment là 'COMPLETED'
        if (res.data.status === 'COMPLETED') {
            const reservation = await createReservation(data);

            if (!reservation) {
                console.error('Reservation creation failed');
                return {
                    paymentResult: res.data,
                    error: 'Reservation creation failed',
                };
            }

            return {
                paymentResult: res.data,
                reservation,
            };
        } else {
            console.error('Payment capture failed:', res.data);
            return {
                error: 'Payment capture failed',
                paymentResult: res.data,
            };
        }
    } catch (error) {
        console.error('Error during payment processing:', error);
        return { error: 'Error during payment processing' };
    }
};
