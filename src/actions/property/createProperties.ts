'use server';

import { sendRequest } from '@/utils/api';
import { getSession } from '../getCurrentUser';

export async function createProperty(data: any) {
    const session = await getSession();
    const {} = data;
    const res = await sendRequest<IBackendRes<any>>({
        method: 'POST',
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/properties`,
        headers: {
            Authorization: `Bearer ${session?.user?.access_token}`,
        },
        body: { ...data },
    });
    if (res.statusCode !== 200) {
        console.error('không có căn hộ nào', res);
        return null;
    }
    return res.data.id;
}
