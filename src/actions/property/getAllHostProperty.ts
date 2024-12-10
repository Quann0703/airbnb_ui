'use server';

import { sendRequest } from '@/utils/api';
import { getSession } from '../getCurrentUser';

export async function getAllHostProperty(hostId: string) {
    const session = await getSession();
    console.log(hostId);

    const res = await sendRequest<IBackendRes<any>>({
        method: 'GET',
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/properties/host/${hostId}`,
        headers: {
            Authorization: `Bearer ${session?.user.access_token}`,
        },
    });
    if (res.statusCode !== 200) {
        console.error('không có căn hộ nào', res);
        return null;
    }
    return res.data.propertyHost;
}
