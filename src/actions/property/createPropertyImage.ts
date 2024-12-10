'use server';

import { sendRequest } from '@/utils/api';
import { getSession } from '../getCurrentUser';

export async function createPropertyImage(propertyId: string) {
    // Kiểm tra session
    const session = await getSession();
    if (!session || !session.user?.access_token) {
        throw new Error('Không tìm thấy thông tin phiên người dùng');
    }

    // Kiểm tra URL backend
    if (!process.env.NEXT_PUBLIC_BACKEND_URL) {
        throw new Error('URL backend không được cấu hình');
    }

    try {
        const res = await sendRequest<IBackendRes<any>>({
            method: 'POST',
            url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/property.images`,
            headers: {
                Authorization: `Bearer ${session.user.access_token}`,
            },
            body: { propertyId },
        });

        if (res.statusCode !== 201) {
            console.error('Không tạo được căn hộ:', res);
            throw new Error(res.message || 'Không tạo được propertyImage');
        }

        console.log('Căn hộ đã được tạo:', res);
        return res.data._id;
    } catch (error) {
        console.error('Lỗi khi gửi request:', error);
        throw error; // Ném lỗi để có thể xử lý ở nơi gọi
    }
}
