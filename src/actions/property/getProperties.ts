'use server';

import { sendRequest } from '@/utils/api';
import { getSession } from '../getCurrentUser';

export interface IPropertyPrams {
    category?: string;
    listingId?: string;
    hostId?: string;
}
export async function getProperties(params: IPropertyPrams) {
    let query = '';
    if (params.category) {
        query = params.category;
    }

    const session = await getSession();

    const res = await sendRequest<IBackendRes<any>>({
        method: 'GET',
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/properties`,
        headers: {
            Authorization: `Bearer ${session?.user?.access_token}`,
        },
        queryParams: {
            category: query,
        },
    });

    if (res.statusCode !== 200) {
        console.error('không có căn hộ nào', res);
        return null;
    }
    return res.data.properties;
}
