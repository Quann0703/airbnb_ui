'use server';

import { sendRequest } from '@/utils/api';

import { getSession } from '../getCurrentUser'; // Adjust import based on your project structure

// Create payment function
export async function createPayment(data: any) {
    try {
        const session = await getSession();

        // Check if the session exists and user is authenticated
        if (!session || !session.user.access_token) {
            console.log('User is not authenticated');
            return null;
        }
        console.log(data);

        // Define the request to create a payment
        const res = await sendRequest<IBackendRes<any>>({
            method: 'POST',
            url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/payments/paypal/create`,
            headers: {
                Authorization: `Bearer ${session.user.access_token}`,
            },
            body: { ...data }, // Send body as form data
        });

        console.log('Payment creation response:', res.data.paymentResponse);

        if (res.statusCode !== 201) {
            console.log('Error creating payment');
            return null;
        }

        return res.data.paymentResponse;
    } catch (error) {
        console.error('Error creating payment:', error instanceof Error ? error.message : error);
        return null;
    }
}
