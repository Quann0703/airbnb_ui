'use server';

import { sendRequest } from '@/utils/api';
import { getSession } from '../getCurrentUser';

export async function getCategory() {
    let query = '';
    const session = await getSession();
    const res = await sendRequest<IBackendRes<any>>({
        method: 'GET',
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/categories`,
        headers: {
            Authorization: `Bearer ${session?.user?.access_token}`,
        },
    });
    if (res.statusCode !== 200) {
        console.error('không có căn hộ nào', res);
        return null;
    }
    return res.data.results;
}
